
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

public enum Status_userE { Marreid, [DataMember] Unmarreid }
namespace DTO.classes.user_classes
{
  public class UserDTO
  {

    
    //   public static int cnt = 0;

public List<string> payThisMonth { get; set; }=new List<string>();
    public int Id { get; set; }
    public string MaritalStatus { get; set; }
    public DateTime last_Debit_order  { get; set; }
    
    public int Id_user { get; set; }

    public string First_name { get; set; }

    public string Last_name { get; set; }

    public int _Manager { get; set; }

    public bool Vip { get; set; }

    public bool Friend { get; set; }

    //  public string Token_cardit { get; set; }
    //  [DataMember]
    public Status_userE Status_user { get; set; }

    public Management_statusDTO Management_status { get; set; }
    public string NameManagement_status { get; set; }

    public Communication  Communication_ways { get; set; }

    public Bank_details Bank_Details { get; set; }

    public string Remarks { get; set; }

    public DateTime Joining_date { get; set; }

    public int Scoring { get; set; }
    public int RachelLea { get; set; }
    public string Loans { get; set; }
    public string Father_name { get; set; }
    public string Status_reason { get; set; }
    public Crdit Crdit { get; set; }

    public UserDTO() { }

    public override string ToString()
    {
      return " user: " + First_name + " " + Last_name + " Manager: " + Management_status + " VIP: " + Vip + " Id user " + Id_user + "   Status:" + Status_user.ToString() + " Remarks: " + Remarks +
    "\nCommunication_ways " + Communication_ways.ToString() + " \nbank detalis " + Bank_Details.ToString(); ;
    }

  }
}
