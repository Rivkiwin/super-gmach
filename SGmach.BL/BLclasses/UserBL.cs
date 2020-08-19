using DTO.classes.user_classes;
using System;
using Dal1;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BL.convertions;
using SGmach.Entity;

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
    public static void Get_users_byFund(int fundID)
    {
      //Dictionary<int, List<string>, UserDTO> users = new Dictionary<int, List<string>, UserDTO>();
      List<UserDTO> list = new List<UserDTO>();
      using (SuperGmachEntities db = new SuperGmachEntities())
      {
        var res = from uf in db.UserInFunds
                  join u in db.Users on uf.userID equals u.id
                  where uf.fundID == fundID
                  select new { uf, u };

         foreach (var item in res)
         {
          object o = new object() { };
          o =Userconvert.DALtoDTO( item.u)  ;

        //users.Add(item.u.id, new List<string>() { item.uf.fundID.ToString(),item.uf.date_join.ToString(),item.uf.balance.ToString() });
      }
      }

  }
  }
}
