
using DTO.classes;
using SGmach.Entity.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BI.convertions
{
 public class IncomeConvert
  {
    public static IncomeDTO DALtoDTO(Income income)
    {
      return new IncomeDTO()
      {
        Amount = (int)income.Amount,
        Date = (DateTime)income.Date,
        From = (string)income.From,
        Id = (int)income.Id,
        Id_Gmach =income.GmachId
        ,
        Payment_method = income.Payment_method.ToString(),
        remark = (string)income.Remarks,
      };
    }

    public static Income DTOtoDAL(IncomeDTO income)
    {
      return new Income()
      {
        Remarks = income.remark,
        // Payment_method = income.Payment_method,
        Amount = income.Amount,
        Date = income.Date,
        From = income.From,
        Id = income.Id,
        GmachId = income.Id_Gmach
      };

    }
  }
}
