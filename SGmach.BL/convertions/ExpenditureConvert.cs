
using DTO.classes;
using SGmach.Entity.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BI.convertions
{
  public class ExpenditureConvert
  {
    public static ExpenditureDTO DALtoDTO(Expenditure expenditure)
    {
      ExpenditureDTO expenditureNew = new ExpenditureDTO()
      {
        Id = expenditure.Id,
        Amount = expenditure.Amount,
        Date = (DateTime)expenditure.Date,
        Purpose = expenditure.Purpose,
        Receives = expenditure.Receives,
        Way_of_payment = expenditure.Way_of_payment,
        Status=expenditure.NameStatus
      };
      return expenditureNew;
    }
    public static Expenditure TDOtoDAL(ExpenditureDTO expenditure)
    {
      return new Expenditure() {
        Amount = expenditure.Amount,
        Purpose = expenditure.Purpose,
        Date = expenditure.Date,
        Receives = expenditure.Receives,
        Way_of_payment = expenditure.Way_of_payment,
        NameStatus = expenditure.Status
      };
    }
  }
}
