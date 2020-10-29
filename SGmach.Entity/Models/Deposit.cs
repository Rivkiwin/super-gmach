using System;
namespace SGmach.Entity.Models
{
    public class Deposit
    {
        public int DepositId { get; set; }
        public string GmachId { get; set; }="shavetHchim";
        public int Amount { get; set; }
        public string Type { get; set; }
        public DateTime Date  { get; set; }
        public int UserId { get; set; }
        public string Payment_method { get; set; }
        public string FundId { get; set; }
        public Fund Fund { get; set; }

        public User User { get; set; }
        
        
    }
}