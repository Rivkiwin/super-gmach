
using DTO.classes;
using SGmach.Entity.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BI.convertions
{
public class StatusConvert
  {
    static public StatusDTO DALtoDTO(Status status)
    {
      return new StatusDTO() {Name=status.NameStatus,Description=status.Description};
    }
    static public Status DTOtoDaL(StatusDTO status)
    {
      return new Status() {NameStatus=status.Name,Description=status.Description};
    }
  }
}
