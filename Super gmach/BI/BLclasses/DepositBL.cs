using BI.convertions;
using Dal1;
using DTO.classes.deposut;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DB =Dal1.SuperGmachEntities;
namespace BI.BLclasses
{
 public class DepositBL
  {
    public static void AddDeposit(DepositDetails deposit)
    {
      DB db = new SuperGmachEntities();
      try
      {
        Deposit deposit_DAL = new Deposit();
        deposit_DAL = DepositConvert.DTOtoDAL(deposit);
        db.Deposits.Add(deposit_DAL);
        FundBL.AddBalance((int)deposit.amount, deposit.fund_id);
        User user = db.Users.FirstOrDefault();
        user.Scoring = (int)((int)user.Scoring.GetValueOrDefault() +deposit.amount * 0.5);
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
      DB db = new SuperGmachEntities();
      Deposit deposit = db.Deposits.FirstOrDefault(dep => dep.Id == id);
      if(deposit==null)
      {
        throw new Exception("deposits not found");
      }
      else
      {
        deposit.status = 3;
      }
    }
    public static void update(DepositDetails deposit)
    {
      DB db = new SuperGmachEntities();
      Deposit _deposit = db.Deposits.FirstOrDefault(dep => dep.Id == deposit.Id);
      if (deposit == null)
      {
        throw new Exception("deposits not found");
      }
      else
      {
        _deposit.amount = deposit.amount;
        _deposit.date = deposit.date;
        _deposit.fund_id = deposit.fund_id;
        _deposit.status = deposit.status.id;
        _deposit.type = deposit.type;
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
        Deposit deposit = db.Deposits.FirstOrDefault(d => d.Id == id);
        depositDetails = DepositConvert.DALtoDepositDetails(deposit);
      }
      catch (Exception e)
      {

        throw e;
      }
      return depositDetails;
    }
    public static List<DepositDetails> getByUserId(int UserId)
    {
      List<DepositDetails> deposits = new List<DepositDetails>();
      try
      {
        DB db = new SuperGmachEntities();
        List<Deposit> deposits_DAL = db.Deposits.Where(d => d.user_id == UserId).ToList();
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
    public static List<DepositDetails> getByFundId(int FundId)
    {
      List<DepositDetails> deposits = new List<DepositDetails>();
      try
      {
        DB db = new SuperGmachEntities();
        List<Deposit> deposits_DAL = db.Deposits.Where(d => d.fund_id == FundId).ToList();
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
