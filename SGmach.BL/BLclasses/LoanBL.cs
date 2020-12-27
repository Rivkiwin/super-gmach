using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BI.convertions;
using DTO.classes;
using SGmach.Entity.Models;
using db = SGmach.Entity.SuperGmachEntities;

namespace BI.BLclasses {
  public class LoanBL {
    public static void Edite (LoanDTO loan) {

    }
    static public void SetScore (LoanDTO Loan) {
      db Sgmach = new db ();
      int score = 0;
      User user = Sgmach.Users.FirstOrDefault (u => u.UserId == Loan.id_user);
      if (user == null) {
        throw new Exception ("user didnt fund");
      }
      score = score + (int) user.Scoring;
      if (Loan.amount < 30000) {
        score = score + 10;
      }
      Loan.Score = score;
    }
    static private void SetRepayment (Loan loan) {
      db Sgmach = new db ();
      // DateTime date1 = loan.BeginningRepayment;
      // DateTime date2 = date1.AddMonths(loan.month);
    
      int c = loan.Months / loan.Num_payments;
      int amount = loan.Amount / loan.Months;
      for (int i =1; i <= loan.Num_payments; i = ++i) {
        Repayments repayment = new Repayments () { };

        repayment.Amount = amount;
        if (i == loan.Num_payments) {
          repayment.Amount = loan.Amount - (amount * (loan.Num_payments - 1));
        }
        repayment.UserId=loan.UserId;
        repayment.Date = loan.RepaymentStart.AddMonths (i + c);
        repayment.LoanId = loan.LoanId;

        Sgmach.Repayments.Add (repayment);
        Sgmach.SaveChanges ();
      }
    }
    public static void Add (LoanDTO loan) {
      SetScore (loan);
      db Sgmach = new db ();
      //if its Approved
      Loan loanDAL = LoanConvert.DTOtoDAL (loan);
      loanDAL = Sgmach.Loans.Add (loanDAL).Entity;
      Sgmach.SaveChanges ();
      if (loan.management_Status == "Approved") {
        int FutureBalance = FundBL.GetFutureBalance ("1", loan.date_start);
        if (FutureBalance < loan.amount) {
          loanDAL.remark += " יתרת הגמח ביום התחלת הלוואה קטנה מסכום ההלוואה";
          loanDAL.NameManagement_status = "Invalid";
        } else {
          SetRepayment (loanDAL);
          if (loan.NameStatus == "active") {
            FundBL.Subtract_Balance (loan.amount);
          }
          Sgmach.SaveChanges ();
        }
        loan.paid = false;
        // Loan loanDAL = LoanConvert.DTOtoDAL(loan);
        // loanDAL = Sgmach.Loans.Add(loanDAL).Entity;
        Sgmach.SaveChanges ();

      }

    }
    public static void Update (LoanDTO loan) {
      db Sgmach = new db ();
      Loan loanDAL = Sgmach.Loans.FirstOrDefault (l => l.LoanId == loan.id_loan);
      loanDAL.Months = loan.month;
      loanDAL.remark = loan.remark;
      loanDAL.NameStatus = loan.NameStatus;
      loanDAL.RepaymentStart = loan.date_start;
      loanDAL.NameManagement_status=loan.management_Status;
      if (loanDAL == null) {
        throw new Exception ("loan not found");
      }
      //if it became Approved
      if (loanDAL.NameManagement_status != "Approved" && loan.management_Status == "Approved" && loanDAL.NameStatus != "active") {
        if (loan.NameStatus == "future") {
          int FutureBalance = FundBL.GetFutureBalance ("1", loan.date_start);
          if (FutureBalance - 2000 < loan.amount) {
            loanDAL.remark = "סכום ההלוואה גדול מיתרת הגמח";
            loanDAL.NameManagement_status = "Invalid";
          } else {
            SetRepayment (loanDAL);
            loanDAL.NameManagement_status = "Approved";
          }
        }
      } else if (loanDAL.NameManagement_status != "Approved" && loan.management_Status == "Approved" && loan.NameStatus == "active") {
        loanDAL.NameManagement_status = "Approved";
        loanDAL.NameStatus = "active";
        loanDAL.RepaymentStart = DateTime.Today;
        SetRepayment (loanDAL);
      }

      // if the loan become active (the friend get the money) the  fund  Balance have to Subtract
      if (loan.NameStatus == "active" && loanDAL.NameStatus != "active") {
        loanDAL.NameStatus = "active";
        loan.management_Status = "Proper";
        FundBL.Subtract_Balance (loan.amount);
      }

      Sgmach.SaveChanges ();
    }
    public static List<LoanDTO> GetAll () {
      db Sgmach = new db ();
      List<LoanDTO> loans = new List<LoanDTO> ();
      foreach (Loan loan in Sgmach.Loans) {
        LoanDTO loanDTO = LoanConvert.DALtoDTO (loan);
        if (loan.NameManagement_status == "Unauthorized") {
          var Today = DateTime.Now;
          var monthWait = ((Today.Year - loan.EnteryDate.Year) * 12) - loan.EnteryDate.Month + Today.Month;
          loanDTO.Score=monthWait*10;
        }
        loans.Add (loanDTO);
      }
      return loans;
    }
    public static LoanDTO GetByID (int LoanId) {
      db Sgmach = new db ();
      Loan loan = Sgmach.Loans.FirstOrDefault (l => l.LoanId == LoanId);
      LoanDTO loanDTO = LoanConvert.DALtoDTO (loan);
      List<Repayments> Repayments = Sgmach.Repayments.Where (r => r.LoanId == LoanId).ToList ();
      foreach (var Repayment in Repayments) {
        loanDTO.Repayments.Add (RepaymentConvert.DALtoDTO (Repayment));
      }
      return loanDTO;
    }
    public static List<LoanDTO> GetByUser (int idUser) {
      db Sgmach = new db ();
      List<LoanDTO> loans = new List<LoanDTO> ();
      List<Loan> loansUser = Sgmach.Loans.Where (loan => loan.UserId == idUser).ToList ();
      return loans;
    }
    public static double Balance (int loanId) {
      double balance = 0;
      db SGmach = new db ();
      Loan loan = SGmach.Loans.FirstOrDefault (l => l.LoanId == loanId);
      if (loan == null || loan.NameManagement_status == "performed") {
        return 0;
      }
      List<Repayments> repayments = SGmach.Repayments.Where (r => r.LoanId == loanId && r.NameStatus == "future").ToList ();
      foreach (var payment in repayments) {
        balance += payment.Amount;
      }
      return balance;
    }

    public static void Delte (int LoanId) {
      db Sgmach = new db ();
      Loan loan = Sgmach.Loans.FirstOrDefault (l => l.LoanId == LoanId);
      if (loan.NameStatus != "future") {
        throw new Exception ("ניתן למחוק רק הלוואות שתרם התחילו");
      } else {
        List<Repayments> repayments = Sgmach.Repayments.Where (r => r.LoanId == LoanId).ToList ();
        foreach (var repayment in repayments) {
          Sgmach.Repayments.Remove (repayment);
        }
        Sgmach.Loans.Remove (loan);
        Sgmach.SaveChanges ();
      }

    }
  }
}