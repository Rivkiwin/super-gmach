using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace DTO.classes.user_classes
{
    [DataContract]
    public  class Communication
    {
        [DataMember]
        public string Phon1 { get; set; }
        [DataMember]
        public string Phon2 { get; set; }
        [DataMember]
        public string Email_addres { get; set; }
        [DataMember]
        public string City { get; set; }
        [DataMember]
        public string Street { get; set; }
        [DataMember]
        public int Num_street { get; set; }
        public Communication(string phon1, string email,string city,string street,int num_street)
        {
            Phon1 = phon1;
            Email_addres = email;
            City = city;
            Street = street;
            Num_street = num_street;
        }
        public Communication(string phon1, string phon2, string email,string city,string street,int num_street) : this( phon1,  email,city,street,num_street)
        {
            Phon2 = phon2;
         }
      
    }
}
