using System.Diagnostics;
using BI.convertions;
using DTO.classes;
using SGmach.Entity;
using SGmach.Entity.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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

    static public void AddExpenditure(ExpenditureDTO Expenditure)
    {
      using (SuperGmachEntities db = new SuperGmachEntities())
      {
        try
        {

          Expenditure e = ExpenditureConvert.TDOtoDAL(Expenditure);
          db.Expenditure.Add(e);
          //fundId 1 is for the main fund
          if (Expenditure.Status == "performed")
          {
            FundBL.Subtract_Balance(Expenditure.Amount, "1");
          }
          db.SaveChanges();
        }
        catch (Exception e)
        {
          throw e;
        }
      }
    }
    static public ExpenditureDTO GetByID(int id)
    {
      ExpenditureDTO exDTO = new ExpenditureDTO();
      using (SuperGmachEntities db = new SuperGmachEntities())
      {
        try
        {
          var e = db.Expenditure.FirstOrDefault(exp => exp.Id == id);
          exDTO = ExpenditureConvert.DALtoDTO(e);
        }
        catch (Exception ex)
        {

          throw ex;
        }
      }
      return exDTO;

    }
    public static void updateExpenditure(ExpenditureDTO expenditure)
    {
      using (SuperGmachEntities db = new SuperGmachEntities())
      {
        try
        {
          Expenditure update_expenditure = db.Expenditure.FirstOrDefault(e => e.Id == expenditure.Id);
          if (update_expenditure != null)
          {
            update_expenditure.Amount = expenditure.Amount;
            //update_expenditure.future_date = expenditure.future_date;
            update_expenditure.Purpose = expenditure.Purpose;
            update_expenditure.Receives = expenditure.Receives;
            ///chack if its became performed
            if (expenditure.Status != update_expenditure.NameStatus)
            {
              if (expenditure.Status == "performed")
              {
                FundBL.Subtract_Balance(expenditure.Amount);
              }
              else
              {
                ///check if it was performed and change to canceled 
                if (expenditure.Status =="canceled" && update_expenditure.NameStatus=="performed")
                {
                  FundBL.AddBalance(expenditure.Amount);
                }
              }
              update_expenditure.NameStatus =expenditure.Status;
            }
            db.SaveChanges();
          }
        }
        catch (Exception ex)
        {

          throw ex;
        }
      }
    }
    public static void cancelExpenditure(int ExpenditureId)
    {
      try
      {
        using (SuperGmachEntities db = new SuperGmachEntities())
        {
          Expenditure expenditure = db.Expenditure.FirstOrDefault(ex => ex.Id == ExpenditureId);
          if (expenditure==null)
          {
            throw new Exception("expenditure not found");
          }
          expenditure.NameStatus = "canceled";
          FundBL.AddBalance(expenditure.Amount);
        }
      }
      catch (Exception e)
      {
        throw e;
      }
    }
  }
}
