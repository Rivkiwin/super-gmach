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
  public class StatusBL
  {
    public static List<StatusDTO> GetList()
    {
      List<StatusDTO> list = new List<StatusDTO>();
      using (SuperGmachEntities db = new SuperGmachEntities())
      {
        foreach (Status s in db.Statuses)
        {
          list.Add(StatusConvert.DALtoDTO(s));
        }
      }
      return list;
    }

    public static StatusDTO GetByName(string name)
    {
      SuperGmachEntities db = new SuperGmachEntities();
      {
        var status=db.Statuses.FirstOrDefault(s=>s.NameStatus==name);
        {
          if (status!=null)
          {
            return StatusConvert.DALtoDTO(status);
          }
        }
        return null;
      }
    }
  }
}
