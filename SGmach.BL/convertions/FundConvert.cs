using BI.BLclasses;
using DTO.classes.fund;
using SGmach.Entity.Models;
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
        date_create = (DateTime)fund.Date_create.GetValueOrDefault(),
        Fund_name = fund.fund_name,
        Id = fund.FundId,
        Required_months = (int)fund.required_months.GetValueOrDefault(),
        required_vip = (bool)fund.required_vip.GetValueOrDefault(),
        Status =fund.NameStatus,
        balance = fund.Balance,
        required_friend=(bool)fund.required_friend.GetValueOrDefault()
      };
      return Nfund;
    }


    public static Fund DTOtoDAL(FundDTO fund)
    {
      Fund nFund = new Fund()
      {
        NameStatus = fund.Status,
        comments = fund.Comments,
        Date_create = fund.date_create,
        fund_name = fund.Fund_name,
        required_months = fund.Required_months,
        required_vip = fund.required_vip,
        Balance=fund.balance,
        required_friend=fund.required_friend
      };
      return nFund;
    }


  }
}
