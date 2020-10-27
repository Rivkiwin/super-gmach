using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.classes
{
  public class StatusDTO
  {
    public int id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public StatusDTO() { }

    public StatusDTO(string name, string description)
    {
      Name = name;
      Description = description;
    }
  }    
}
