

using DTO.classes.user_classes;
using SGmach.Entity.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.convertions
{
 public class Mangagment_status_convert
  {
    public static Management_statusDTO DALtoDTO(Management_status management_Status)
    {
      Management_statusDTO status = new Management_statusDTO(management_Status.NameManagement_status, management_Status.Color) {Id=management_Status.NameManagement_status,Name=management_Status.Description,Color=management_Status.Color };
      return status;
    }

    public static Management_status DTOtoDAL(Management_statusDTO management_Status)
    {
      Management_status status =new Management_status() {Color=management_Status.Color,NameManagement_status=management_Status.Id,Description=management_Status.Name };
      return status;
    }

    
  }
}
