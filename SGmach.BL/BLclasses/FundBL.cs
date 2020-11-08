using BI.convertions;
using BL.BLclasses;
using BL.convertions;
using DTO.classes.fund;
using DTO.classes.user_classes;
using SGmach.Entity.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;


using DB = SGmach.Entity.SuperGmachEntities;
namespace BI.BLclasses
{
  public class FundBL
  {
    public static List<FundDTO> GetList()
    {
      DB db = new DB();
      List<FundDTO> list = new List<FundDTO>();
      foreach (Fund fund in db.Funds)
      {
        list.Add(FundConvert.DALtoDTO(fund));
      }
      return list;
    }

    public static FundDTO GetById(string id)
    {
      FundDTO Fund = new FundDTO();
      DB db = new DB();
      foreach (Fund fund in db.Funds)
      {
        if (fund.FundId == id)
        {
          Fund = FundConvert.DALtoDTO(fund);
          Fund.Futurbalance = GetFutureBalance(id, DateTime.Now.AddMonths(1));
          return Fund;
        }
      }
      return null;
    }
    public static void AddBalance(int Value, string fundId = "1")
    {
      fundId = fundId!=null? fundId : "1";
      try
      {
        DB db = new DB();
        Fund fund = db.Funds.FirstOrDefault(f => f.FundId == fundId);
        if (fund != null)
        {
          fund.Balance= fund.Balance + Value;
          db.SaveChanges();
          Console.WriteLine(fund.Balance);
        }
        else
        {
          throw new Exception("fund id not found");
        }
      }
      catch (Exception)
      {

        throw;
      }
    }
    public static void Subtract_Balance(int Value, string fundId = "1")
    {
      try
      {
        DB db = new DB();
        var fund = db.Funds.FirstOrDefault(f => f.FundId == fundId);
        if (fund != null)
        {
          fund.Balance = fund.Balance - Value;
          db.SaveChanges();

        }
        else
        {
          throw new Exception("fund id not found");
        }
      }
      catch (Exception)
      {

        throw;
      }

    }

    
    public static int GetFutureBalance(string idFund, DateTime FutureDate)
    {
      List<Expenditure> expenditures = new List<Expenditure>();
      List<Income> incomes = new List<Income>();
      List<withdrawing> withdrawings = new List<withdrawing>();
      //  List<Deposit> deposits = new List<Deposit>();
      List<Repayments> repayments = new List<Repayments>();
      List<Loan> loans = new List<Loan>();
      int FutureBalance = 0;
      int FuturIncomes = 0;
      int FutureExpenditures = 0;
      int FutureWithdrawals = 0;

      DB Sgmach = new DB();
      var Today = DateTime.Today;
      if (idFund == "1")
      {
        expenditures = Sgmach.Expenditure.Where(e => e.Date < FutureDate  && e.NameStatus=="future" ).ToList();
        incomes = Sgmach.Incoms.Where(i => i.Date < FutureDate && i.Date > Today).ToList();
        // loans = Sgmach.Loans.Where(l => (FutureDate > l. && l.date_start > Today)).ToList();
        repayments = Sgmach.Repayments.Where(r => FutureDate > r.Date && r.Date > Today && r.NameStatus!="performed").ToList();
      }
      withdrawings = Sgmach.Withdrawing.Where(w => w.FundId == idFund
      && w.Date< FutureDate && w.NameStatus!="performed").ToList();
      foreach (Income income in incomes)
      {
        FuturIncomes += income.Amount;
      }
      foreach (Expenditure ex in expenditures)
      {
        FutureExpenditures += ex.Amount;
      }
      foreach (Loan loan in loans)
      {
        FutureWithdrawals += loan.Amount;
      }
      foreach (Repayments repayment in repayments)
      {
        FuturIncomes +=(int)repayment.Amount;
      }
      Fund fund = Sgmach.Funds.FirstOrDefault(f => f.FundId == idFund);
      FutureBalance = (int)fund.Balance;
      FutureBalance += FuturIncomes;
      FutureBalance -= (FutureWithdrawals + FutureExpenditures);
      return FutureBalance;

    }
    public static List<UserDTO> GetUsersToAdd(string fundId)
    {

      List<UserDTO> users = new List<UserDTO>();
      //List<User> usersDAL = new List<User>();

      DB Sgmach = new DB();
      Fund fund = Sgmach.Funds.FirstOrDefault(f => f.FundId == fundId);
      DateTime Today = DateTime.Today;
      //usersDAL = Sgmach.Users.Where(u =>u.joining_date.GetValueOrDefault().AddMonths((int)fund.required_months) <= Today
      //&&(fund.required_vip==true&&u.VIP==true||fund.required_vip==false)).ToList();

      var query = from u in Sgmach.Users
                  where (u.joining_date.AddMonths((int)fund.required_months)) <= Today
                  where !(from uf in Sgmach.UserInFunds where  uf.FundId == fund.FundId select uf.UserId).Contains(u.UserId)
                  select u;
      foreach (User user in query)
      {
        users.Add(Userconvert.DALtoDTO(user));
      }
      return users;
    }
    public static void AddFriends(int[] frinds, string fundID)
    {
      DateTime Today = DateTime.Now;
      DB Sgmach = new DB();
      int Length = frinds.Length;
      for (var i=0; i< Length; i++)
      {
        User_in_fund user_In_Fund = new User_in_fund();

        user_In_Fund.balance = 0;
        user_In_Fund.date_join = Today;
        user_In_Fund.FundId = fundID;
        user_In_Fund.UserId = frinds[i];
        Sgmach.UserInFunds.Add(user_In_Fund);
        Sgmach.SaveChanges();
        
      }
    }
  }
}
