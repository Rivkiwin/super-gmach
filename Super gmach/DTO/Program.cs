using DTO.classes.user_classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    class Program
    {
        static void Main(string[] args)
        {
            
            Bank_details bd = new Bank_details("poalym", "bb", 1235647, 124444, 5);
            Communication cw = new Communication("0548486788", "R43545@gmail.com", "bb", "yoal", 12);
            Management_statusDTO Ms = new Management_statusDTO("Proper", "red");
            UserDTO u = new UserDTO("noty", "viner", null, true, 1234, Status_userE.Marreid, Ms, cw, bd, "lll",true);
            Console.WriteLine(u.ToString());
            
            Console.Read();
        }
    }
}
