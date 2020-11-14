using BI.BLclasses;
using DTO.classes;
using DTO.classes.user_classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SGmach.Entity.Models;
using System.Threading.Tasks;

namespace BI.convertions
{
  public class WithdrawalsConvert
  {
    public static withdrawing DTOtoDAL(WithdrawalsDTO withdrawalsDTO)
    {
      withdrawing withdrawal = new withdrawing()
      {
        Amount = withdrawalsDTO.Amount,
        Date = withdrawalsDTO.Date,
        FundId = withdrawalsDTO.FundId,
        NameStatus = withdrawalsDTO.Status,
        UserId = withdrawalsDTO.FriendId,
        //  =withdrawalsDTO.PaymentMethod
      };
      return withdrawal;
    }
    public static WithdrawalsDTO DALtoDTO(withdrawing withdrawal)
    {
      WithdrawalsDTO withdrawalsDTO = new WithdrawalsDTO()
      {
        FriendId = withdrawal.UserId,
        // Status = withdrawal.NameStatus,
        Amount = withdrawal.Amount,
        // PaymentMethod = withdrawal.paymentMethod,
        Id = withdrawal.Id,
        Date = withdrawal.Date,
        FundId = withdrawal.FundId
      };
      return withdrawalsDTO;
    }
  }
}
