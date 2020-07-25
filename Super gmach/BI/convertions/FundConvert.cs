using BI.BLclasses;
using Dal1;
using DTO.classes.fund;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BI.convertions
{
  public class FundConvert
  {
    public static FundDTO DALtoDTO(Fund fund)
    {
      FundDTO Nfund = new FundDTO()
      {
        Comments = fund.comments,
        date_create = (DateTime)fund.date_create.GetValueOrDefault(),
        Fund_name = fund.fund_name,
        Id = fund.Id,
        Required_months = (int)fund.required_months.GetValueOrDefault(),
        required_vip = (bool)fund.required_vip.GetValueOrDefault(),
        Status = StatusBL.GetById((int)fund.status.GetValueOrDefault()),
        balance = (int)fund.balance.GetValueOrDefault()
      };
      return Nfund;
    }


    public static Fund DTOtoDAL(FundDTO fund)
    {
      Fund nFund = new Fund()
      {
        status = fund.Status.id,
        comments = fund.Comments,
        date_create = fund.date_create,
        fund_name = fund.Fund_name,
        required_months = fund.Required_months,
        required_vip = fund.required_vip,
        balance=fund.balance
      };
      return nFund;
    }


  }
}
