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
        public string Form_deposit { get; set; }


        public string FundId { get; set; }
        public Fund Fund { get; set; }
        public int User_in_fundId { get; set; }
        public User_in_fund User_In_Fund { get; set; }
        
        
    }
}