using BI.convertions;
using DTO.classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SGmach.Entity;
using SGmach.Entity.Models;

namespace BI.BLclasses
{
public  class StatusBL
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
  }
}
