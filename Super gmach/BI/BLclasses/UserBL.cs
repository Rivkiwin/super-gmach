using DTO.classes.user_classes;
using System;
using Dal1;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using BL.convertions;
using DTO.classes;
using DTO.classes.fund;
using User_in_fundDTO = DTO.classes.fund.User_in_fundDTO;

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
    public static UserDTO GetUserById(int id)
    {
      User user = new User();
      try
      {
        using (SuperGmachEntities db = new SuperGmachEntities())
          user = db.Users.FirstOrDefault(u => u.id == id);
        return Userconvert.DALtoDTO(user);
      }
      catch (Exception e)
      {
        throw e;
      }
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
    public static List<User_in_fundDTO> Get_users_byFund(int fundID)
    {
      List<User_in_fundDTO> uif = new List<User_in_fundDTO>();
      using (SuperGmachEntities db = new SuperGmachEntities())
      {
        var res = from uf in db.User_in_fund
                  join u in db.Users on uf.userID equals u.id
                  where uf.fundID == fundID
                  select new { uf, u };

        foreach (var item in res)
        {
          uif.Add(new User_in_fundDTO()
          {
            User_tz= item.u.id_user,
            UserID = item.u.id,
            FoudID = item.uf.fundID,
            balance = (int)item.uf.balance,
            Date_join = (DateTime)item.uf.date_join,
            Last_name = item.u.firstName,
            First_name= item.u.firstName,
            Status = Management_statusBL.GetById((int)item.u.Management_status)
          });
        }
      }
      return uif;
    }
    public static UserDetalis UserDetalis(int id)
    {
       UserDetalis detalis= new UserDetalis();
      return detalis;
    }
  }
}
