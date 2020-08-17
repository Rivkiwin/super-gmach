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
  public class StatusBL
  {
    public static List<StatusDTO> GetList()
    {
      List<StatusDTO> list = new List<StatusDTO>();
      using (SuperGmachEntities db = new SuperGmachEntities())
      {
        foreach (Status s in db.Status)
        {
          list.Add(StatusConvert.DALtoDTO(s));
        }
      }
      return list;
    }

    public static StatusDTO GetById(int id)
    {
      SuperGmachEntities db = new SuperGmachEntities();
      {
        foreach (Status status in db.Status)
        {
          if ((int)status.id == id)
          {
            return StatusConvert.DALtoDTO(status);
          }
        }
        return null;
      }
    }
  }
}
