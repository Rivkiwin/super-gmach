using BL.BLclasses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal1;
using DTO.classes.user_classes;
using BL.convertions;
using DTO.classes;
using BI.convertions;
using BI.BLclasses;

namespace BL
{
    class Program
    {
        static void Main(string[] args)
        {

      Management_statusDTO s = new Management_statusDTO("תקין", "white");
      //Console.WriteLine( Management_statusBL.AddStatus(s));
      // UserBL.GetUsersList();
      // Bank_details bd = new Bank_details("poalym", "bb", 1235647, 124444, 5);
      // Communication cw = new Communication("0548486788", "R43545@gmail.com", "bb", "yoal", 12);
      //Management_statusDTO Ms = new Management_statusDTO("Proper", "red");
      // UserDTO u = new UserDTO("חני", "שמש",2, true, 345, Status_userE.Unmarreid, Ms, cw, bd, "lll", true,"chim");

      // SuperGmachEntities db = new SuperGmachEntities();
      // UserBL.AddnewUser(u);

      // db.SaveChanges();
      //UserBL.GetUsersList();
      //Console.OutputEncoding = new UTF8Encoding();
      //Console.InputEncoding = new UTF8Encoding();
      //foreach (Management_statusDTO item in Management_statusBL.GetManagement_statusList())
      //{

      //    Console.WriteLine(item.ToString());

      //}
      //foreach (var item in ExpenditureBL.GetExpendituresList())
      //{

      //  Console.WriteLine( item.id);
      //}

      //UserBL.Get_users_byFund(2);

        FundBL.Subtract_Balance(5,1);

      Console.Read();
        }
    }
}
