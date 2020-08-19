using BI.convertions;
using Dal1;
using DTO.classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SGmach.Entity;

namespace BI.BLclasses
{
 public class ExpenditureBL
  {
    static public List<ExpenditureDTO> GetExpendituresList()
    {

      List<ExpenditureDTO> list = new List<ExpenditureDTO>();
      using (SuperGmachEntities db = new SuperGmachEntities())
      {
        foreach (Expenditure ex in db.Expenditure)
        {
          list.Add(ExpenditureConvert.DALtoDTO(ex));
        }
      }
      return list;
    }

    static public string AddExpenditure(ExpenditureDTO Expenditure)
    {
      using (SuperGmachEntities db = new SuperGmachEntities())
      {
        try
        {

          Expenditure e = ExpenditureConvert.TDOtoDAL(Expenditure);
          db.Expenditure.Add(e);
          db.SaveChanges();
        }
        catch (Exception e)
        {
          return "erro on add Expenditure: " + e;
        }
      }
      return "success add";
    }
  }
}
