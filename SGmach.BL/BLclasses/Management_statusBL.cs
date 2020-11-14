
using BL.convertions;
using DTO.classes.user_classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SGmach.Entity;
using SGmach.Entity.Models;

namespace BL.BLclasses
{
   public class Management_statusBL
  {
    public static List<Management_statusDTO> GetManagement_statusList()
    {
      List<Management_statusDTO> userList = new List<Management_statusDTO>();
      using (SuperGmachEntities db = new SuperGmachEntities())
      {
        foreach (Management_status status in db.ManagementStatuses)
        {
          userList.Add(Mangagment_status_convert.DALtoDTO(status));
        }
      }
      return userList;
    }


    public static Management_statusDTO GetByName(string nameStatuse)
    {
      SuperGmachEntities db = new SuperGmachEntities();
      {
        foreach (Management_status status in db.ManagementStatuses)
        {
          if (status.NameManagement_status == nameStatuse)
          {
            return Mangagment_status_convert.DALtoDTO(status);
          }
        }
        return null;
      }
    }

    public static string AddStatus(Management_statusDTO status)
    {
      using (SuperGmachEntities db = new SuperGmachEntities())
      {
        try
        {
          
       Management_status  s=Mangagment_status_convert.DTOtoDAL(status);
          Console.WriteLine(s.NameManagement_status+" "+s.Color);
          db.ManagementStatuses.Add(s);
          
          db.SaveChanges();

        }
        catch (Exception e)
        {
          Console.WriteLine("err on add status: " + e.ToString());
          return "err on add status: " + e.ToString();
        }
        return "status add Successfully";
      }

    }
  }
}
