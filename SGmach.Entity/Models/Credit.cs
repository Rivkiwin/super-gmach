namespace SGmach.Entity.Models
{
    public class Credit
    {
        public int id { get; set; }
        public string Number { get; set; }
        public string CVV { get; set; }
        public string Expdate { get; set; }
        public string Owner { get; set; }
        public string CrdeditOwnerID { get; set; }
        public int Ciling { get; set; }
        public int UserId { get; set; }
        public string Token { get; set; }
        public User  User { get; set; }
    }
}