using System.Diagnostics;
using DTO.classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SGmach.Entity;
using SGmach.Entity.Models;

namespace BI.convertions
{
  public class ExpenditureConvert
  {
    public static ExpenditureDTO DALtoDTO(Expenditure expenditure)
    {
      ExpenditureDTO expenditureNew = new ExpenditureDTO()
      {
        id = expenditure.Id,
        amount = (int)expenditure.Amount,
      Date = (DateTime)expenditure.Date,
        purpose = expenditure.Purpose,
        Receives = expenditure.Receives,
        way_of_payment = expenditure.Way_of_payment
        };
      using (SuperGmachEntities db = new SuperGmachEntities())
      {
        expenditureNew.status = StatusConvert.DALtoDTO(db.Statuses.FirstOrDefault(x => x.NameStatus == expenditure.NameStatus));
      }
      return expenditureNew;
    }
    public static Expenditure TDOtoDAL(ExpenditureDTO expenditure)
    {
      
        Expenditure e=new Expenditure() {
        Amount = (int)expenditure.amount,
        Date = (DateTime)expenditure.Date,
      
        Purpose = expenditure.purpose,
        Receives = expenditure.Receives,
        Way_of_payment = expenditure.way_of_payment==null?"":expenditure.way_of_payment,
        // Status =
      };
      return e;
    }
  }
}
