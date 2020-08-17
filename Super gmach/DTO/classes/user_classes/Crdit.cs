using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.classes.user_classes
{
  class Crdit
  {
    public int Number { get; set; }
    public string Fname { get; set; }
    public string Lname { get; set; }
    public int CVV { get; set; }
    public DateTime Date { get; set; }
    public string idOwners { get; set; }
  }
}
