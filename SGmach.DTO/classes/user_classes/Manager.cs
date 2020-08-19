using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace DTO.classes.user_classes
{
    [DataContract]
    public  class Manager
    {
        static int cnt=0;
        [DataMember]
        public int Id { get; set; }
        [DataMember]
        public int Permissions { get; set; }
        
        public Manager(int id,int permissions)
        {
            Id = cnt;
            Permissions = permissions;
            cnt++;
        }
    }

}
