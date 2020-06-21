using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace DTO.classes.user_classes
{
    [DataContract]
    public  class Bank_details
    {
        // static int cnt = 0;
        [DataMember]
        public int Id { get; set; }
        [DataMember]
        public string Name { get; set; }
        [DataMember]
        public string Brunch { get; set; }
        [DataMember]
        public int Account_number { get; set; }
        [DataMember]
        public int Ciling { get; set; }
        [DataMember]
        public int Collection_date {  get;  set; }
        public Bank_details(string name, string brunch,int account_number,int ciling,int collection_date)
        {
       //     Id = cnt;
            Name = name;
            Brunch = brunch;
            Account_number = account_number;
            Ciling = ciling;
            Collection_date = collection_date;
            //++;
        }
        public override string ToString()
        {
            return "Bank_details id: "+Id +" name: "+Name+ "  Brunch: " + Brunch+" account number: "+Account_number+" Ciling: "+Ciling+ " Collection_date " + Collection_date;
        }
    }
}
