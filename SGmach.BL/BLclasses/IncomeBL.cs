using BI.convertions;
using DTO.classes;
using SGmach.Entity;
using SGmach.Entity.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DB = SGmach.Entity.SuperGmachEntities;

namespace BI.BLclasses
{
 public class IncomeBL
  {
    public static List<IncomeDTO> GetList()
    {
      List<IncomeDTO> list = new List<IncomeDTO>();
      using (SuperGmachEntities db = new SuperGmachEntities())
      {
        foreach (Income i in db.Incoms)
        {
          list.Add(IncomeConvert.DALtoDTO(i));
        }
      }
      return list;
    }
    

    public static IncomeDTO GetById(int id)
    {
      SuperGmachEntities db = new SuperGmachEntities();
      {
        foreach (Income income in db.Incoms)
        {
          if ((int)income.Id == id)
          {
            return IncomeConvert.DALtoDTO(income);
          }
        }
        return null;
      }
    }

    public static void Add(IncomeDTO income)
    {
      DB db = new DB();
      try
      {
        Income IncomeDAL = new Income();
        IncomeDAL = IncomeConvert.DTOtoDAL(income);
        db.Incoms.Add(IncomeDAL);
        FundBL.AddBalance((int)income.Amount);

        db.SaveChanges();
      }
      catch (Exception e)
      {
        throw new Exception(e.ToString() +' '+income.ToString());
      }

    }

  }
}
