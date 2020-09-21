using System;
namespace SGmach.Entity.Models
{
    public class Income
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int Amount { get; set; }
        public int Way_of_payment { get; set; }
        public string GmachId { get; set; }="shavetHchim";
        public string From { get; set; }
        public string Remarks { get; set; }

        public string NameStatus { get; set; }
        public Status status { get; set; }
    }
}