
using DTO.classes;
using SGmach.Entity.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BI.convertions
{
  class RepaymentConvert
  {
    public static RepaymentsDTO DALtoDTO(Repayments repayment)
    {
      RepaymentsDTO repaymentDTO = new RepaymentsDTO()
      {
        Amount = repayment.Amount,
        Date = repayment.Date,
        Id = repayment.RepaymentId,
        LoanID = repayment.LoanId,
        // Remark = repayment.Re,
        status = repayment.NameStatus
      };
      return repaymentDTO;
    }
  }
}
