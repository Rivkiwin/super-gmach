using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Diagnostics;
using System.Linq;
using BL.convertions;
using DTO.classes.user_classes;
using User_in_fundDTO = DTO.classes.fund.User_in_fundDTO;
using BI.BLclasses;
using SGmach.Entity;
using SGmach.Entity.Models;
using SGmach.BL.BLclasses;

namespace BL.BLclasses {
  public class UserBL {
    public static ListUsers GetUsersList () {
      var sumPayThisMonth = 0;
      // List<UserDTO> userList = new List<UserDTO> ();
      ListUsers userList = new ListUsers ();
      using (SuperGmachEntities db = new SuperGmachEntities ()) {
        foreach (User u in db.Users) {
          UserDTO user = Userconvert.DALtoDTO (u);
          //cheac if the user Proper else add alret
          if (user.Management_status.Id != "Proper") {
            AlertsUsers alert = new AlertsUsers () {
            UserId = user.Id_user,
            Alret = " סטטוס ניהול לחבר " + user.Last_name + " " + user.First_name + " " + user.Management_status.Name + " סיבת הסטטוס " + user.Status_reason
            };
            userList.alertsUsers.Add (alert);
          }
          /// cheack if the user have active loan 
          Loan loan = db.Loans.FirstOrDefault (l => l.UserId == u.UserId && l.NameStatus != "performed");
          if (loan != null) {
            var today = DateTime.Now;
            var thisMonth = DateTime.Now.Month;
            List<Repayments> repayments = db.Repayments.Where (r => r.LoanId == loan.LoanId && r.NameStatus != "performed").ToList ();
            List<Repayments> pastRepayments = repayments.Where (r => r.Date < today && r.Date != today).ToList ();
            foreach (var repayment in pastRepayments) {
              sumPayThisMonth += repayment.Amount;
            }
            if (pastRepayments.ToArray ().Length > 0) {
              // user.payThisMonth = ":החזר הלוואה מחודשים קודמים שטרם החזרו" + sumPayThisMonth.ToString ();
              AlertsUsers alert = new AlertsUsers () {
                UserId = user.Id_user,
                Alret = "  יש החזרים מחודשים קודמים שלא  שולמו לחבר  " + user.Last_name + " " + user.First_name
              };
              userList.alertsUsers.Add (alert);
            }

            Repayments repaymentThisMonth = repayments.FirstOrDefault (r => r.Date.Month == thisMonth);
            if (repaymentThisMonth != null) {
              // user.payThisMonth += " :תשלום פררעון לחודש זה" + repaymentThisMonth.Amount.ToString ();
              sumPayThisMonth += repaymentThisMonth.Amount;
            }
          }
          if (loan != null) {
            switch (loan.NameManagement_status) {
              case "Invalid":
                user.Loans = " לא תקין " + LoanBL.Balance (loan.LoanId).ToString ();
                break;
              case "Unauthorized":
                user.Loans = "לא מאושר";
                break;
              case "Proper":
                user.Loans = loan.NameStatus == "active" ? ("-" + LoanBL.Balance (loan.LoanId).ToString ()) : "ממתין לאישור";
                break;
              case "Approved":
                user.Loans = loan.NameStatus == "future" ? loan.Amount.ToString () + " עתידי" : loan.Amount.ToString () + "מאושר ";
                break;
            }
          }
          // user.Loans = loan != IChangeTracking null ? LoanBL.Balance (loan.LoanId) : 0;

          User_in_fund rachelLea = db.UserInFunds.FirstOrDefault (uf => u.UserId == uf.UserId && uf.FundId == "2");
          user.RachelLea = rachelLea != null ? (int) rachelLea.balance : 0;
          // Repayment repayment=db.Repayments.Where(r=>r.
          userList.Users.Add (user);
        }

      }
      return userList;
    }
    public static UserDTO GetUserById (int id) {
      User userDal = new User ();
      try {
        using (SuperGmachEntities db = new SuperGmachEntities ()) {
          userDal = db.Users.FirstOrDefault (u => u.UserId == id);
          UserDTO user = Userconvert.DALtoDTO (userDal);
          ///cheack pay thisMonth
          var sumPayThisMonth = 0;
          var paid=0;
          Loan loan = db.Loans.FirstOrDefault (l => l.UserId == id && l.NameManagement_status != "performed");
          if (loan != null) {
            var thisMonth = DateTime.Now.Month;
            List<Repayments> repayments = db.Repayments.Where (r => r.LoanId == loan.LoanId && r.NameStatus != "performed").ToList ();
            List<Repayments> pastRepayments = repayments.Where (r => r.Date.Month < thisMonth && r.Date.Month != thisMonth).ToList ();
            if(pastRepayments.ToArray().Length>0){
            foreach (var repayment in pastRepayments) {
              sumPayThisMonth += repayment.Amount;
            }
            user.payThisMonth.Add (" תשלום פרעות מחודשים קודמים שטרם שלמו :" + sumPayThisMonth.ToString ());;}
            Repayments repaymentThisMonth = repayments.FirstOrDefault (r => r.Date.Month == thisMonth);
            if (repaymentThisMonth != null) {
                sumPayThisMonth += repaymentThisMonth.Amount;
              if (repaymentThisMonth.NameStatus!="performed")
              {
              user.payThisMonth.Add ("תשלום פררעון לחודש זה :" + repaymentThisMonth.Amount.ToString ());
              }
              else{
                user.payThisMonth.Add ("תשלום פררעון לחודש זה :" + repaymentThisMonth.Amount.ToString ()+" -שולם ");
                paid+=repaymentThisMonth.Amount;
              }
            
            }

          }
          if (user.Friend == true) {
            var last_Debit_order = user.last_Debit_order;
            var today = DateTime.Now;
            var month = ((today.Year - last_Debit_order.Year) * 12) + today.Month - last_Debit_order.Month;
            if (month == 0) {
              sumPayThisMonth += 50;
              paid+=50;
              user.payThisMonth.Add (" שולם:הוראת קבע: 50 ");
            }
            else{
              var amount= 50*month;
               sumPayThisMonth += amount;
              user.payThisMonth.Add ("הוראת קבע: "+amount.ToString());
            }

          }
          user.payThisMonth.Add ("סהכ :" + sumPayThisMonth.ToString ());
          user.payThisMonth.Add("שולם :"+paid.ToString());
          var toPay=sumPayThisMonth-paid;
             user.payThisMonth.Add("סהכ לתשלום :"+toPay.ToString());
          return user;
        }
      } catch (Exception e) {
        throw e;
      }
    }
    public static int AddnewUser (UserDTO u) {
      //  User user = Userconvert.DTOtoDAL(u);
      using (SuperGmachEntities db = new SuperGmachEntities ()) {
        try {
          User userDAL = Userconvert.DTOtoDAL (u);
          var date=DateTime.Now;
          userDAL.joining_date=DateTime.Now;
          userDAL.last_Debit_order=date.AddMonths(-1);
          userDAL = db.Users.Add (userDAL).Entity;
          User_in_fund user_In_Fund=new User_in_fund()
          {
            balance=0,
            UserId=userDAL.UserId,
            FundId="1",
            date_join=DateTime.Now
          };
          db.UserInFunds.Add(user_In_Fund);
          db.SaveChanges ();
          return userDAL.UserId;
        } catch (Exception e) {
          throw new Exception (e.ToString ());

        }

      }
    }

    public static User_in_fundDTO Get_user_byFund (string fundID, int userId) {

      using (SuperGmachEntities db = new SuperGmachEntities ()) {
        var res = from uf in db.UserInFunds
        join u in db.Users on uf.UserId equals u.UserId
        where uf.FundId == fundID
        select new { uf, u };
        var userRes = res.FirstOrDefault (u => u.u.UserId == userId);
        if (userRes != null) {
          User_in_fundDTO user = new User_in_fundDTO () {
          balance = (int) userRes.uf.balance,
          Date_join = (DateTime) userRes.uf.date_join,
          First_name = userRes.u.firstName,
          Last_name = userRes.u.lastname,
          UserID = userRes.u.UserId,
          // User_tz = userRes.u.id_user
          };

          return user;
        }
        return new User_in_fundDTO ();
      }
    }

    public static List<User_in_fundDTO> Get_users_byFund (string fundID) {
      List<User_in_fundDTO> uif = new List<User_in_fundDTO> ();

      using (SuperGmachEntities db = new SuperGmachEntities ()) {
        var res = from uf in db.UserInFunds
        join u in db.Users on uf.UserId equals u.UserId
        where uf.FundId == fundID
        select new { uf, u };

        foreach (var item in res) {
          uif.Add (new User_in_fundDTO () {
            User_tz = item.u.UserId,
              UserID = item.u.UserId,
              FoudID = item.uf.FundId,
              balance = (int) item.uf.balance,
              Date_join = (DateTime) item.uf.date_join,
              Last_name = item.u.lastname,
              First_name = item.u.firstName,
              Status = Management_statusBL.GetByName (item.u.NameManagement_status)
          });
        }
      }
      return uif;
    }
    public static UserDetalis UserDetalis (int id) {
      List<User_in_fund> fundList;
      UserDetalis detalis = new UserDetalis ();
      using (SuperGmachEntities db = new SuperGmachEntities ()) {
        fundList = db.UserInFunds.Where (uif => uif.UserId == id).ToList ();
        foreach (var User_in_fund in fundList) {
          UserFund userFund = new UserFund ();
          userFund.Balance = (int) User_in_fund.balance;
          userFund.DateJoin = (DateTime) User_in_fund.date_join;
          userFund.FundName = (db.Funds.FirstOrDefault (fund => fund.FundId == User_in_fund.FundId)).fund_name;
        }
      }
      //detalis.User = GetUserById(id);

      return detalis;
    }

    public static List<AlertsUsers> GetAlerts () {
      List<AlertsUsers> alertsUsers = new List<AlertsUsers> ();
      using (SuperGmachEntities db = new SuperGmachEntities ()) {
        // var today = DateTime.Today;

        // AlertsUsers alert = new AlertsUsers()
        //   {
        //     UserId = user.UserId,
        //     Alret =  "  פג תוקף האשראי לחבר   " + user.lastname + " "+user.firstName
        //   };
        //   alertsUsers.Add(alert);
        // }
      }
      return alertsUsers;
    }

    public static void AddCredit (Crdit credit, int UserID) {
      SuperGmachEntities db = new SuperGmachEntities ();
      User user = db.Users.FirstOrDefault (u => u.UserId == UserID);
      Credit credit1 = db.Credits.FirstOrDefault (c => c.UserId == UserID);

      credit1.CVV = credit.CVV.ToString ();
      credit1.Number = credit.Number.Substring (credit.Number.Length - 4);
      credit1.Owner = credit.idOwners;
      credit1.UserId = UserID;
      db.SaveChanges ();
    }

    public static void SetBankDetails (Bank_details bankDetails) {
      SuperGmachEntities db = new SuperGmachEntities ();
      var id = Int32.Parse (bankDetails.UserId);
      BankDetails bankDetails1 = db.BankDetails.FirstOrDefault (b => b.UserId == id);
      bankDetails1.Branch = bankDetails.Brunch;
      bankDetails1.Bank = bankDetails.Bank;
      bankDetails1.Account = bankDetails.Account;
      bankDetails1.owner = bankDetails.Owner;
      db.SaveChanges ();
    }
    public static int Edite (UserDTO user) {
      SuperGmachEntities db = new SuperGmachEntities ();

      User userDal = db.Users.FirstOrDefault (u => u.UserId == user.Id_user);
      userDal.father_name = user.Father_name;
      userDal.lastname = user.Last_name;
      userDal.VIP = user.Vip;
      userDal.Status_reason = user.Status_reason;
      userDal.frirnd = user.Friend;
      userDal.email_addres = user.Communication_ways.Email_addres;
      userDal.phon1 = user.Communication_ways.Phon1;
      userDal.phon2 = user.Communication_ways.Phon2;
      userDal.city = user.Communication_ways.City;
      userDal.num_street = user.Communication_ways.Num_street;
      userDal.street = user.Communication_ways.Street;
      userDal.remarks = user.Remarks;
      userDal.MaritalStatus = user.MaritalStatus;
      userDal.NameManagement_status = user.NameManagement_status;
      db.SaveChanges ();
      return userDal.UserId;
    }
     public  static void  collectDebit_order(Debit_order debit_Order)
     {
      SuperGmachEntities db = new SuperGmachEntities ();
      User user=db.Users.FirstOrDefault (u => u.UserId == debit_Order.UserID);
      user.last_Debit_order=DateTime.Now;
      Income Debit_order=new Income(){
        Amount=debit_Order.amount,
        Date=DateTime.Now,
        From=" מנוי "+debit_Order.UserID,
      Remarks="הוראת קבע"
      };
      db.Incoms.Add(Debit_order);
      db.SaveChanges();
     }
  }
  public class ListUsers {
    public List<UserDTO> Users { set; get; } = new List<UserDTO> ();
    public List<AlertsUsers> alertsUsers { set; get; } = new List<AlertsUsers> ();

  }

}
