namespace SGmach.Entity.Models
{
    public class BankDetails
    {
        public int Id { get; set; }
        public string Branch { get; set; }
        public string Bank { get; set; }
        public string Account { get; set; }
        public string owner { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
    }
}