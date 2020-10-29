
using DTO.classes.income;
using System;
using DB = SGmach.Entity.SuperGmachEntities;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SGmach.Entity.Models;
using SGmach.Entity;

namespace BI.convertions
{
  public class DepositConvert
  {
    public static Deposit DTOtoDAL(DepositDTO deposit)
    {
      try
      {
        Deposit DAL_Deposit = new Deposit()
        {

          Amount = deposit.Amount,
          Date = deposit.Date,
          FundId = deposit.FundId.ToString(),
          // st = deposit.status,
          Type = deposit.Type,
          UserId = deposit.UserId,
          Payment_method=deposit.Payment_method
        };
        return DAL_Deposit;
      }
      catch (Exception e)
      {

        throw e;
      }
    }

    public static DepositDTO DALtoDTO(Deposit deposit)
    {
      try
      {
        DepositDTO deposit_dto = new DepositDTO()
        {
          Amount = deposit.Amount,
          Date = deposit.Date,
          FundId =deposit.FundId,
          DepositId = deposit.DepositId,
          // status_id = deposit.status,
          Type = deposit.Type,
          UserId = deposit.UserId
        };
        return deposit_dto;
      }
      catch (Exception)
      {

        throw;
      }

    }
    public static DepositDetails DALtoDepositDetails(Deposit deposit)
    {
      DepositDetails depositDetails = new DepositDetails();
      try
      {
        DB db = new SuperGmachEntities();
        // User_in_fund u_I_F=db.UserInFunds.FirstOrDefault(uf=>uf.User_in_fundId==deposit.User_in_fundId);
        User user = db.Users.FirstOrDefault(f => f.UserId == deposit.UserId);
        //Status status = db.Status.FirstOrDefault(s => s.id == deposit.status);
        Fund fund = db.Funds.FirstOrDefault(f =>f.FundId == deposit.FundId);
        depositDetails.user_name = user.lastname+" "+user.firstName;
        depositDetails.UserId =  user.UserId;
        depositDetails.FundName = fund.fund_name;
        // depositDetails.status = deposit.status;
        depositDetails.amount =(int)deposit.Amount;
        depositDetails.date = deposit.Date;
        depositDetails.type = deposit.Type;
        depositDetails.Id = deposit.DepositId;
      }
      catch (Exception e)
      {

        throw e;
      }
      return depositDetails;
    }
  }
}
