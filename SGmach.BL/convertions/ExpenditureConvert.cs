using System.Diagnostics;
using DTO.classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SGmach.Entity;
using Dal1;

namespace BI.convertions
{
  public class ExpenditureConvert
  {
    public static ExpenditureDTO DALtoDTO(Expenditure expenditure)
    {
      ExpenditureDTO expenditureNew = new ExpenditureDTO()
      {
        id = expenditure.id,
        amount = (int)expenditure.amount,
      Date = (DateTime)expenditure.date,
        purpose = expenditure.purpose,
        Receives = expenditure.Receives,
        way_of_payment = expenditure.way_of_payment
        };
      using (SuperGmachEntities db = new SuperGmachEntities())
      {
        expenditureNew.status = StatusConvert.DALtoDTO(db.Statuses.FirstOrDefault(x => x.id == expenditure.status));
      }
      return expenditureNew;
    }
    public static Expenditure TDOtoDAL(ExpenditureDTO expenditure)
    {
      
        Expenditure e=new Expenditure() {
        amount = (int)expenditure.amount,
        date = (DateTime)expenditure.Date,
        purpose = expenditure.purpose,
        Receives = expenditure.Receives,
        way_of_payment = expenditure.way_of_payment==null?"":expenditure.way_of_payment,
        status = 1
      };
      return e;
    }
  }
}
