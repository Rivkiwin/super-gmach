using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace DTO.classes.user_classes
{
 
    public  class Communication
    {
        
        public string Phon1 { get; set; }
     
        public string Phon2 { get; set; }
      
        public string Email_addres { get; set; }
     
        public string City { get; set; }
       
        public string Street { get; set; }
   
        public int Num_street { get; set; }
    public Communication() { }

    public Communication(string phon1, string email, string city, string street, int num_street)
    {
      Phon1 = phon1;
      Email_addres = email;
      City = city;
      Street = street;
      Num_street = num_street;
    }
    public Communication(string phon1, string phon2, string email, string city, string street, int num_street) : this(phon1, email, city, street, num_street)
    {
      Phon2 = phon2;
    }
    public override string ToString()
    {
      return "phon1: " + Phon1 + " phon2:" + " email: " + Email_addres + " City:" + City + " street:" + Street +
        "num_street: " + Num_street;
    }

  }
}
