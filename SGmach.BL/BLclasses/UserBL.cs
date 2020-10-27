using DTO.classes.user_classes;
using System;
using System.Collections.Generic;
using System.Linq;
using BL.convertions;
using User_in_fundDTO = DTO.classes.fund.User_in_fundDTO;
using BI.BLclasses;
using SGmach.Entity;
using SGmach.Entity.Models;

namespace BL.BLclasses
{
    public class UserBL
  {
    public static List<UserDTO> GetUsersList()
    {
      List<UserDTO> userList = new List<UserDTO>();
      using (SuperGmachEntities db = new SuperGmachEntities())
      {
        foreach (User u in db.Users)
        {
          UserDTO user =Userconvert.DALtoDTO(u);
          Loan loan = db.Loans.FirstOrDefault(l => l.UserId == u.UserId&& l.NameManagement_status!="performed");
          user.Loans = loan!=null ? LoanBL.Balance(loan.LoanId) : 0;
          User_in_fund rachelLea = db.UserInFunds.FirstOrDefault(uf => u.UserId == uf.UserId&&uf.FundId==2);
          user.RachelLea = rachelLea != null ? (int)rachelLea.balance : 0;
          userList.Add(user);
        }

      }
      return userList;
    }
    public static UserDTO GetUserById(int id)
    {
      User user = new User();
      try
      {
        using (SuperGmachEntities db = new SuperGmachEntities())
          user = db.Users.FirstOrDefault(u => u.UserId == id);
        return Userconvert.DALtoDTO(user);
      }
      catch (Exception e)
      {
        throw e;
      }
    }
    public static int AddnewUser(UserDTO u)
    {
      //  User user = Userconvert.DTOtoDAL(u);
      using (SuperGmachEntities db = new SuperGmachEntities())
      {
        try
        {
         User userDAL = Userconvert.DTOtoDAL(u);
          userDAL= db.Users.Add(userDAL).Entity;
          db.SaveChanges();
          return userDAL.UserId;
        }
        catch (Exception e)
        {
            throw new Exception(e.ToString());
          
        }
       
      }
    }

    public static User_in_fundDTO Get_user_byFund(int fundID,int userId)
    {
      
      using (SuperGmachEntities db = new SuperGmachEntities()) {
        var res = from uf in db.UserInFunds
                  join u in db.Users on uf.UserId equals u.UserId
                  where uf.FundId == fundID 
                  select new { uf, u };
       var userRes = res.FirstOrDefault(u=>u.u.UserId== userId);
        if (userRes != null)
        {
          User_in_fundDTO user = new User_in_fundDTO()
          {
            balance = (int)userRes.uf.balance,
            Date_join = (DateTime)userRes.uf.date_join,
            First_name = userRes.u.firstName,
            Last_name = userRes.u.lastname,
            UserID = userRes.u.UserId,
            // User_tz = userRes.u.id_user
          };

          return user;
        }
        return new User_in_fundDTO();
      }
    }

    public static List<User_in_fundDTO> Get_users_byFund(int fundID)
    {
      List<User_in_fundDTO> uif = new List<User_in_fundDTO>();
      using (SuperGmachEntities db = new SuperGmachEntities())
      {
        var res = from uf in db.UserInFunds
                  join u in db.Users on uf.UserId equals u.UserId
                  where uf.FundId == fundID
                  select new { uf, u };

        foreach (var item in res)
        {
          uif.Add(new User_in_fundDTO()
          {
            User_tz = item.u.UserId,
            UserID = item.u.UserId,
            FoudID = item.uf.FundId,
            balance = (int)item.uf.balance,
            Date_join = (DateTime)item.uf.date_join,
            Last_name = item.u.firstName,
            First_name = item.u.firstName,
            Status = Management_statusBL.GetByName(item.u.NameManagement_status)
          });
        }
      }
      return uif;
    }
    public static UserDetalis UserDetalis(int id)
    {
      List<User_in_fund> fundList;
      UserDetalis detalis = new UserDetalis();
      using (SuperGmachEntities db = new SuperGmachEntities())
      {
        fundList = db.UserInFunds.Where(uif => uif.UserId == id).ToList();
        foreach (var User_in_fund in fundList)
        {
          UserFund userFund = new UserFund();
          userFund.Balance = (int)User_in_fund.balance;
          userFund.DateJoin = (DateTime)User_in_fund.date_join;
          userFund.FundName = (db.Funds.FirstOrDefault(fund => fund.FundId == User_in_fund.FundId.ToString())).fund_name;
        }
      }
      //detalis.User = GetUserById(id);

      return detalis;
    }

    public static List<AlertsUsers> GetAlerts()
    {
      List<AlertsUsers> alertsUsers = new List<AlertsUsers>();
      using (SuperGmachEntities db = new SuperGmachEntities())
      {
        var today = DateTime.Today;
        // List<User> users = db.Users.Where(user => user.Credit.Expdate < today).ToList();

        // foreach (User user in users)
        // {
        //   AlertsUsers alert = new AlertsUsers()
        //   {
        //     UserId = user.UserId,
        //     Alret =  "  פג תוקף האשראי לחבר   " + user.lastname + " "+user.firstName
        //   };
        //   alertsUsers.Add(alert);
        // }
      }
        return alertsUsers;
    }

  }
}
