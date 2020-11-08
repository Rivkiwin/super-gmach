using BI.convertions;
using DTO.classes;
using SGmach.Entity.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using db = SGmach.Entity.SuperGmachEntities;

namespace BI.BLclasses
{
  public class LoanBL
  {
    static public void SetScore(LoanDTO Loan)
    {
      db Sgmach = new db();
      int score = 0;
      User user = Sgmach.Users.FirstOrDefault(u => u.UserId == Loan.id_user);
      if(user==null)
      {
        throw new Exception("user didnt fund");
      }
      score = score + (int)user.Scoring;
      if(Loan.amount<30000)
      {
        score = score + 10;
      }
      Loan.Score = score;
    }
    static private void SetRepayment(Loan loan)
    {
      db Sgmach = new db();
      // DateTime date1 = loan.BeginningRepayment;
      // DateTime date2 = date1.AddMonths(loan.month);
      int c = loan.Months / loan.Num_payments;
      int amount= loan.Amount /loan.Months;
      for (int i = 1; i <= loan.Num_payments; i = ++i )
      {
        Repayments repayment = new Repayments() { };

        repayment.Amount = amount;
        if(i== loan.Num_payments)
        {
          repayment.Amount=loan.Amount-(amount*(loan.Num_payments-1));
        }
        repayment.Date = loan.RepaymentStart.AddMonths(i+c);
        repayment.LoanId = loan.LoanId;
        
        Sgmach.Repayments.Add(repayment);
        Sgmach.SaveChanges();
      }
    }
    public static void Add(LoanDTO loan)
    {
      SetScore(loan);
      db Sgmach = new db();
      //if its Approved
      Loan loanDAL = LoanConvert.DTOtoDAL(loan);
        loanDAL = Sgmach.Loans.Add(loanDAL).Entity;
        Sgmach.SaveChanges();
      if (loan.loan_status == "Approved")
      {
        int FutureBalance = FundBL.GetFutureBalance("1", loan.date_start);
        if (FutureBalance-2000< loan.amount)
        {
          loanDAL.remark+=" יתרת הגמח ביום התחלת הלווה קטנה מסכום ההלוואה";
          loanDAL.NameManagement_status="Invalid";
        }
        else{
        SetRepayment(loanDAL);
        Sgmach.SaveChanges();
        }
        loan.paid = false;
        // Loan loanDAL = LoanConvert.DTOtoDAL(loan);
        // loanDAL = Sgmach.Loans.Add(loanDAL).Entity;
        Sgmach.SaveChanges();
       
      }
     
    }
    public static void Update(LoanDTO loan)
    {
      db Sgmach = new db();
      Loan loanDAL = Sgmach.Loans.FirstOrDefault(l => l.LoanId == loan.id_loan);
      if (loanDAL == null)
      {
        throw new Exception("loan not found");
      }
      //if it became Approved
      if (loanDAL.NameManagement_status != "Approved" && loan.loan_status == "Approved")
      {
        int FutureBalance = FundBL.GetFutureBalance("1", loan.date_start);
        if (FutureBalance - 2000 < loan.amount)
        {
          throw new Exception("you can loanding :balance<loan.amount");
        }
        if (FundBL.GetById("0").balance < loan.amount)
        {
          throw new Exception("you can loanding :balance<loan.amount");
        }
        else
        {
          SetRepayment(loanDAL);
        }
      }
     // loanDAL.loan_status = loan.loan_status;
      loanDAL.Months = loan.month;
      loanDAL.RepaymentStart = loan.date_start;
      // loanDAL.paid = loan.paid;
      loanDAL.remark = loan.remark;
      Sgmach.SaveChanges();
    }
    public static List<LoanDTO> GetAll()
    {
      db Sgmach = new db();
      List<LoanDTO> loans = new List<LoanDTO>();
      foreach( Loan loan in Sgmach.Loans)
      {
        loans.Add(LoanConvert.DALtoDTO(loan));
      }
      return loans;
    }
    public static LoanDTO GetByID(int LoanId)
    {
      db Sgmach = new db();
      Loan loan= Sgmach.Loans.FirstOrDefault(l => l.LoanId == LoanId);
      LoanDTO loanDTO= LoanConvert.DALtoDTO(loan);
      List<Repayments> Repayments = Sgmach.Repayments.Where(r => r.LoanId == LoanId).ToList();
      foreach (var Repayment in Repayments)
      {
        loanDTO.Repayments.Add(RepaymentConvert.DALtoDTO(Repayment));
      }
      return loanDTO;
    }
    public static List<LoanDTO> GetByUser(int idUser)
    {
      db Sgmach = new db();
      List<LoanDTO> loans = new List<LoanDTO>();
      List<Loan> loansUser = Sgmach.Loans.Where(loan => loan.UserId == idUser).ToList();
      return loans;
    }
    public static double Balance(int loanId)
    {
      double balance = 0;
      db SGmach= new db();
      Loan loan=SGmach.Loans.FirstOrDefault(l => l.LoanId == loanId);
      if (loan!=null && loan.NameManagement_status!="performed")
      {
        return 0;
      }
      List<Repayments> repayments = SGmach.Repayments.Where(r => r.LoanId == loanId&&r.NameStatus=="future").ToList();
      foreach (var payment in repayments)
      {
        balance += payment.Amount;
      }
      return balance;
    }
   

  }
}
