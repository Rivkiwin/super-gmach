using BI.convertions;
using Dal1;
using DTO.classes;
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
        foreach (Expenditure ex in db.Expenditures)
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
          db.Expenditures.Add(e);
          //fundId 1 is for the main fund
          if (Expenditure.status.Name == "performed")
          {
            FundBL.Subtract_Balance(Expenditure.amount, 1);
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
          var e = db.Expenditures.FirstOrDefault(exp => exp.id == id);
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
          Expenditure update_expenditure = db.Expenditures.FirstOrDefault(e => e.id == expenditure.id);
          if (update_expenditure != null)
          {
            update_expenditure.amount = expenditure.amount;
            update_expenditure.future_date = expenditure.future_date;
            update_expenditure.purpose = expenditure.purpose;
            update_expenditure.Receives = expenditure.Receives;
            ///chack if its became performed
            if (expenditure.status.id != update_expenditure.status)
            {
              if (expenditure.status.Name == "performed")
              {
                FundBL.Subtract_Balance(expenditure.amount);
              }
              else
              {
                ///check if it was performed and change to canceled 
                if (expenditure.status.Name == "canceled" && update_expenditure.status==2)
                {
                  FundBL.AddBalance(expenditure.amount);
                }
              }
              update_expenditure.status = expenditure.status.id;
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
          Expenditure expenditure = db.Expenditures.FirstOrDefault(ex => ex.id == ExpenditureId);
          if (expenditure==null)
          {
            throw new Exception("expenditure not found");
          }
          //3 is canceled
          expenditure.status = 3;
          FundBL.AddBalance(expenditure.amount);
        }
      }
      catch (Exception e)
      {
        throw e;
      }
    }
  }
}
