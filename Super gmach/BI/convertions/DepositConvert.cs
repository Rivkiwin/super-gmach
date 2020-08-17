using Dal1;
using DTO.classes.deposut;
using System;
using DB = Dal1.SuperGmachEntities;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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

          amount = deposit.amount,
          date = deposit.date,
          fund_id = deposit.fund_id,
          status = deposit.fund_id,
          type = deposit.type,
          user_id = deposit.user_id
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
          amount = deposit.amount.GetValueOrDefault(),
          date = deposit.date,
          fund_id = deposit.fund_id.GetValueOrDefault(),
          Id = deposit.Id,
          status_id = deposit.status.GetValueOrDefault(),
          type = deposit.type,
          user_id = deposit.user_id
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
        User user = db.Users.FirstOrDefault(f => f.id == deposit.user_id);
        Status status = db.Status.FirstOrDefault(s => s.id == deposit.status);
        Fund fund = db.Funds.FirstOrDefault(f =>f.Id == deposit.fund_id);
        depositDetails.user_name = user.lastname+" "+user.firstName;
        depositDetails.user_id = deposit.user_id;
        depositDetails.FundName = fund.fund_name;
        depositDetails.status = StatusConvert.DALtoDTO(status);
        depositDetails.amount =(int)deposit.amount;
        depositDetails.date = deposit.date;
        depositDetails.type = deposit.type;
        depositDetails.Id = deposit.Id;
      }
      catch (Exception e)
      {

        throw e;
      }
      return depositDetails;
    }
  }
}
