using BI.convertions;
using DTO.classes.income;
using SGmach.Entity;
using SGmach.Entity.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DB = SGmach.Entity.SuperGmachEntities;
namespace BI.BLclasses
{
 public class DepositBL
  {
    public static void AddDeposit(DepositDTO deposit)
    {
      DB db = new SuperGmachEntities();
      try
      {
        Deposit deposit_DAL = new Deposit();
        deposit_DAL = DepositConvert.DTOtoDAL(deposit);
        // System.Console.WriteLine(deposit+" DAL/n "+deposit_DAL);
        db.Deposits.Add(deposit_DAL);
        User user = db.Users.FirstOrDefault();
        db.SaveChanges();
        user.Scoring = (int)((int)user.Scoring+deposit.Amount * 0.5);
        User_in_fund user_In_Fund=db.UserInFunds.FirstOrDefault(u=>u.UserId==deposit.UserId&&u.FundId==deposit.FundId);
        user_In_Fund.balance+=deposit.Amount;
        FundBL.AddBalance((int)deposit.Amount, deposit.FundId);
        db.SaveChanges();
      }
      catch (Exception e)
      {

        throw e;
      }
    
    }
    //change status to cancel 
    public static void Cancel(int id)
    {
      // DB db = new SuperGmachEntities();
      // Deposit deposit = db.Deposits.FirstOrDefault(dep => dep.Id == id);
      // if(deposit==null)
      // {
      //   throw new Exception("deposits not found");
      // }
      // else
      // {
      //   deposit. = "canceled";
      // }
    }
    public static void Update(DepositDetails deposit)
    {
      DB db = new SuperGmachEntities();
      Deposit _deposit = db.Deposits.FirstOrDefault(dep => dep.DepositId == deposit.Id);
      if (deposit == null)
      {
        throw new Exception("deposits not found");
      }
      else
      {
        _deposit.Amount = deposit.amount;
        _deposit.Date = deposit.date;
        _deposit.FundId = deposit.fund_id.ToString();
        // _deposit. = deposit.status;
        _deposit.Type = deposit.type;
        db.SaveChanges();
      }
    }
    public static List<DepositDetails> GetList()
    {
      List<DepositDetails> deposits = new List<DepositDetails>();
      try
      {
        DB db = new SuperGmachEntities();
        foreach (var deposit in db.Deposits)
        {
          deposits.Add(DepositConvert.DALtoDepositDetails(deposit));
       
        }
      }
      catch (Exception e)
      {

        throw e;
      }
      return deposits;
    }
    public static DepositDetails GetById(int id)
    {
      DepositDetails depositDetails = new DepositDetails();
      try
      {
        DB db = new SuperGmachEntities();
        Deposit deposit = db.Deposits.FirstOrDefault(d => d.DepositId == id);
        depositDetails = DepositConvert.DALtoDepositDetails(deposit);
      }
      catch (Exception e)
      {

        throw e;
      }
      return depositDetails;
    }
    public static List<DepositDetails> GetByUserId(int UserId)
    {
      List<DepositDetails> deposits = new List<DepositDetails>();
      try
      {
        DB db = new SuperGmachEntities();
        List<Deposit> deposits_DAL = db.Deposits.Where(d => d.UserId == UserId).ToList();
        foreach (var deposit in deposits_DAL)
        {
          deposits.Add(DepositConvert.DALtoDepositDetails(deposit));
        }
      }
      catch (Exception e)
      {

        throw e;
      }
      return deposits;
    }
    public static List<DepositDetails> GetByFundId(string FundId)
    {
      List<DepositDetails> deposits = new List<DepositDetails>();
      try
      {
        DB db = new SuperGmachEntities();
        List<Deposit> deposits_DAL = db.Deposits.Where(d =>d.FundId== FundId).ToList();
        foreach (var deposit in deposits_DAL)
        {
         
          deposits.Add(DepositConvert.DALtoDepositDetails(deposit));
        }
      }
      catch (Exception e)
      {

        throw e;
      }
      return deposits;
    }
  }
}
