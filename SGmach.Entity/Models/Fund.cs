//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace SGmach.Entity.Models
{
    using System;
    using System.Collections.Generic;

    public class Fund
    {
     
     public string FundId { get; set; }
     public string GmachId { get; set; }="shavetHchim";
        public string fund_name { get; set; }
        public Nullable<int> required_months { get; set; }
        public Nullable<bool> required_vip { get; set; }
        public string comments { get; set; }
         public int Balance { get; set; }
        public Nullable<System.DateTime> Date_create { get; set; }



        public string NameStatus { get; set; }
        public Status status { get; set; }

        public List<withdrawing> Withdrawings { get;}=new List<withdrawing>();
        public List<Deposit> Deposits { get;}=new List<Deposit>();
         public  List<User_in_fund> Users_in_fund { get;}=new List<User_in_fund>();
    }
}
