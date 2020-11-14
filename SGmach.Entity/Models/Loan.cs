using System.Collections.Generic;
using System;
namespace SGmach.Entity.Models
{
    public class Loan
    {
        public int LoanId { get; set; }
        public int Amount { get; set; }
        public int Months { get; set; }
        public DateTime RepaymentStart { get; set; }
        public string remark { get; set; }
        public int Num_payments { get; set; }
        public int Score { get; set; }
        public DateTime EnteryDate { get; set; }

 
       public  string NameManagement_status  { get; set; }
        public Management_status Management_Status { get; set; }
        public  int UserId { get; set; } 
        public User User { get; set; }
        public List<Repayments> Repayments { get; }=new List<Repayments>();
    }
}