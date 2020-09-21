using System;
namespace SGmach.Entity.Models
{
    public class Repayment
    {
        public int RepaymentId { get; set; }
        public int Amount { get; set; }
        public DateTime Date { get; set; }



        public string NameStatus   { get; set; }
        public Status Status { get; set; }

        public int LoanId { get; set; }
        public Loan Loan { get; set; }
    }
}