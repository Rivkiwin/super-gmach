
using BL.convertions;
using DAL;
using DTO.classes.user_classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal1;

namespace BL.BLclasses
{
   public class Management_statusBL
  {
    public static List<Management_statusDTO> GetManagement_statusList()
    {
      List<Management_statusDTO> userList = new List<Management_statusDTO>();
      using (SuperGmachEntities db = new SuperGmachEntities())
      {
        foreach (Management_status status in db.Management_status)
        {
          userList.Add(Mangagment_status_convert.DALtoDTO(status));
        }
      }
      return userList;
    }


    public static Management_statusDTO GetById(int id)
    {
      SuperGmachEntities db = new SuperGmachEntities();
      {
        foreach (Management_status status in db.Management_status)
        {
          if ((int)status.Id == id)
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
          Console.WriteLine(s.name+" "+s.Color);
          db.Management_status.Add(s);
          
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
