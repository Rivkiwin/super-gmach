using Dal1;
using DTO.classes;
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
      return new StatusDTO() {Name=status.name,Description=status.description,id=status.id};
    }
    static public Status DTOtoDaL(StatusDTO status)
    {
      return new Status() {name=status.Name,description=status.Description};
    }
  }
}
