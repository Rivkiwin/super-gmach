using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SGmach.angular.Models
{
    public class ApplicationUser : IdentityUser
    {
        public Gmach[] Gmach =
        {
            new Gmach()
            {
                GmachId = "Deafualt-Gmach-Id",
                GmachName = "זכר רחל"
            }
        };
    }

    public class Gmach
    {
        public string GmachId { get; set; }
        public string GmachName { get; set; }
    }


  
}