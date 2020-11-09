using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
namespace SGmach.Entity.Models
{
    public class Repayments
    {
        [Key]
        public int RepaymentId { get; set; }
        public int Amount { get; set; }
        public DateTime Date { get; set; }


          public int UserId  { get; set; }
        public string NameStatus   { get; set; }
        public Status Status { get; set; }

        public int LoanId { get; set; }
        public Loan Loan { get; set; }
    }
}