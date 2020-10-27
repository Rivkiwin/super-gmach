using DTO.classes.user_classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.classes.fund
{
public class User_in_fundDTO
  {
    public Management_statusDTO Status { get; set; }
    public int FoudID { get; set; }
    public int UserID { get; set; }
    public int User_tz { get; set; }
    public string First_name { get; set; }
    public string Last_name { get; set; }
    public int balance { get; set; }
    public DateTime Date_join { get; set; }
    public int Withdrawals { get; set; }
    public int Deposits { get; set; }
  }
}
