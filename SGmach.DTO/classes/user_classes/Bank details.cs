using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace DTO.classes.user_classes
{
    public  class Bank_details
    {
        [DataMember]
        public string Bank { get; set; }
        [DataMember]
        public string Brunch { get; set; }
        [DataMember]
        public string Account { get; set; }
        public string Owner { get; set; }
        public string  UserId { get; set; }
    
        //public int Collection_date {  get;  set; }
    public Bank_details() { }
    // public Bank_details(string name, string brunch, int account_number,string owners)
    // {
    //   Name = name;
    //   Brunch = brunch;
    //   Account_number = account_number;
    //   Owners = owners;
    //   //++;
    // }
    // //public override void ToString()
    //{
    //    //return "Bank_details id: " +" name: "+Name+ "  Brunch: " + Brunch+" account number: "+Account_number+" Ciling: "+Ciling+ " Collection_date " + Collection_date;
    //}
  }
}
