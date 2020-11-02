using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.classes.user_classes
{
 public class Crdit
  {
    public string Number { get; set; }
    public string cardHolder { get; set; }
    // public string  { get; set; }
    public string CVV { get; set; }
    public DateTime Validity { get; set; }
    public string Token { get; set; }
    public string idOwners { get; set; }
  }
}
