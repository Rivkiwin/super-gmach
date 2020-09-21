
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
      Management_statusDTO status = new Management_statusDTO() 
      {Name=management_Status.NameManagement_status,
      Color= management_Status.Color,Description=management_Status.Description };
      return status;
    }

    public static Management_status DTOtoDAL(Management_statusDTO management_Status)
    {
      Management_status status =new Management_status() 
      {Color=management_Status.Color,NameManagement_status=management_Status.Name,Description=management_Status.Description };
      return status;
    }

    
  }
}
