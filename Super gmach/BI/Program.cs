using BL.NewFolder1;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO.classes.user_classes;
using BL.convertions;

namespace BL
{
    class Program
    {
        static void Main(string[] args)
        {
           
            UserBL.GetUsersList();
            Bank_details bd = new Bank_details("poalym", "bb", 1235647, 124444, 5);
            Communication cw = new Communication("0548486788", "R43545@gmail.com", "bb", "yoal", 12);
            Management_statusDTO Ms = new Management_statusDTO("Proper", "red");
             UserDTO u = new UserDTO("ברכי", "פרידמן", null, true, 345, Status_userE.Unmarreid, Ms, cw, bd, "lll", true);
            
            SuperGmachEntities db = new SuperGmachEntities();
             db.Users.Add(Userconvert.DTOtoDAL(u));
           
         //   db.SaveChanges();
            UserBL.GetUsersList();
            Console.WriteLine(UserBL.GetUsersList()[1].ToString());
            Console.Read();
        }
    }
}
