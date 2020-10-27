
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
    public static Deposit DTOtoDAL(DepositDetails deposit)
    {
      try
      {
        Deposit DAL_Deposit = new Deposit()
        {

          Amount = deposit.amount,
          Date = deposit.date,
          FundId = deposit.fund_id.ToString(),
          // st = deposit.status,
          Type = deposit.type,
          User_in_fundId = deposit.user_id
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
          amount = deposit.Amount,
          date = deposit.Date,
          fund_id =Convert.ToInt32(deposit.FundId),
          Id = deposit.DepositId,
          // status_id = deposit.status,
          type = deposit.Type,
          user_id = deposit.User_in_fundId
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
        User_in_fund u_I_F=db.UserInFunds.FirstOrDefault(uf=>uf.User_in_fundId==deposit.User_in_fundId);
        User user = db.Users.FirstOrDefault(f => f.UserId == u_I_F.UserId);
        //Status status = db.Status.FirstOrDefault(s => s.id == deposit.status);
        Fund fund = db.Funds.FirstOrDefault(f =>f.FundId == deposit.FundId);
        depositDetails.user_name = user.lastname+" "+user.firstName;
        depositDetails.user_id =  u_I_F.User_in_fundId;
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
