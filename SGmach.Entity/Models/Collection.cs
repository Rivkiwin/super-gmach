using System;
namespace SGmach.Entity.Models
{
    public class Collection
    {
        public int Id { get; set; }
        public int Amount { get; set; }
        public DateTime Date { get; set; }  

        public string Remarks { get; set; }
      
        public int UserId { get; set; }
        public User User { get; set; }
    }
}