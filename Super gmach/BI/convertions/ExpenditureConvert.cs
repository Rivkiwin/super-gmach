using Dal1;
using DTO.classes;
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
        amount = expenditure.amount,
        future_date = (DateTime)expenditure.future_date.GetValueOrDefault(),
        id = expenditure.id,
        purpose = expenditure.purpose,
        real_date = (DateTime)expenditure.real_date.GetValueOrDefault(),
        Receives = expenditure.Receives,
        way_of_payment = expenditure.way_of_payment
      };
      using (SuperGmachEntities db = new SuperGmachEntities())
      {
        expenditureNew.status = StatusConvert.DALtoDTO(db.Status.Where(x => x.id == expenditure.status).FirstOrDefault());
      }
      return expenditureNew;
    }
    public static Expenditure TDOtoDAL(ExpenditureDTO expenditure)
    {
      return new Expenditure(){
        amount = expenditure.amount,
        future_date =expenditure.future_date,
        purpose = expenditure.purpose,
        real_date = expenditure.real_date,
        Receives = expenditure.Receives,
        way_of_payment = expenditure.way_of_payment,
        status=expenditure.status.id
      };
    }
  }
}