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

    public class withdrawing
    {
       public int Id { get; set; }
        public int Amount { get; set; }
        public DateTime Date { get; set; }


        public int  UserId{ get; set; }
        public User  User { get; set; }
        public String FundId { get; set; }
        public Fund Fund { get; set; }
        public string NameStatus  { get; set; }
        public  Status Status { get; set; }
    }
}
