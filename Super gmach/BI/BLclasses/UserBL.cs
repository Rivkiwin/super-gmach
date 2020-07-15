using DTO.classes.user_classes;
using System;
using Dal1;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using BL.convertions;

namespace BL.BLclasses
{
  public class UserBL
  {
    public static List<UserDTO> GetUsersList()
    {
      List<UserDTO> userList = new List<UserDTO>();
      using (SuperGmachEntities db = new SuperGmachEntities())
      {
        foreach (User u in db.Users)
        {

          userList.Add(Userconvert.DALtoDTO(u));
        }

      }
      return userList;
    }
    public static string AddnewUser(UserDTO u)
    {
      using (SuperGmachEntities db = new SuperGmachEntities())
      {
        try
        {
          User user = Userconvert.DTOtoDAL(u);
          db.Users.Add(user);
          db.SaveChanges();
        }
        catch (Exception e)
        {
          Console.WriteLine(e);
          return e.ToString();
        }
        return "the user add Successfully";
      }
    }
  }
}
