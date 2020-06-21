
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

public enum Status_userE {[DataMember] Marreid, [DataMember] Unmarreid }
namespace DTO.classes.user_classes
{
    [DataContract]
    public class UserDTO
    {
        [DataMember]
        public int Bank { get; set; }
        //   public static int cnt = 0;
        [DataMember]
        public int Id { get; set; }
        [DataMember]
        public int Id_user { get; set; }
        [DataMember]
        public string First_name { get; set; }
        [DataMember]
        public string Last_name { get; set; }
        [DataMember]
        public Manager _Manager { get; set; }
        [DataMember]
        public bool Vip { get; set; }
        [DataMember]
        public bool Friend { get; set; }
        [DataMember]
        //  public string Token_cardit { get; set; }
      //  [DataMember]
        public Status_userE Status_user { get; set; }
        [DataMember]
        public Management_statusDTO Management_status { get; set; }
        [DataMember]
        public Communication Communication_ways { get; set; }
        [DataMember]
        public Bank_details Bank_Details { get; set; }
        [DataMember]
        public string Remarks { get; set; }
        [DataMember]
        public DateTime Joining_date { get; set; }
        [DataMember]
        public int Scoring { get; set; }

        public UserDTO() { }
        public UserDTO(string first_name,string lName,Manager manager, Boolean vip,int id_user, Status_userE status_user, Management_statusDTO management_status,
            Communication communication_ways, Bank_details bank_Details,Boolean friend)
        {
            Friend = friend;   
            //Id = cnt;
            First_name = first_name;
            Last_name = lName;
            _Manager = manager;
            Vip = vip;
            Id_user = id_user;
            Status_user = status_user;
            Management_status = management_status;
            Communication_ways = communication_ways;
            Bank_Details= bank_Details;
         //   FindEquals(this);
            Joining_date = DateTime.Now;
        }
        public UserDTO(string first_name, string lName, Manager manager, Boolean vip, int id_user, Status_userE status_user, Management_statusDTO management_status, Communication communication_ways, Bank_details bank_Details, string remarks,bool friend) :this(first_name, lName, manager, vip, id_user, status_user, management_status, communication_ways, bank_Details, friend)
        {
            Remarks = remarks;
        }
        public Boolean Is_he_manager()
           
        {
            return _Manager == null ? false : true;
        }

        //public void FindEquals(User u)
        //{

        //}
        public override string ToString()
        {
            return " user: "+First_name+" "+Last_name+" Manager: "+Is_he_manager()+ " VIP: "+Vip+" Id user "+Id_user+"   Status:"+Status_user.ToString()+ " Remarks: " + Remarks+
              Management_status.ToString()+ "  \nCommunication_ways " + Communication_ways.ToString()+ " \nbank detalis " + Bank_Details.ToString(); ;
        }
        //public override bool Equals(Object u)
        //{
           
        //  //  return Id == (u as User).Id;

        //}
    }
}
