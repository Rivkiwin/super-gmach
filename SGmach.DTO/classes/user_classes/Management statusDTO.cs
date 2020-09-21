using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace DTO.classes.user_classes
{
  [DataContract]
  public class Management_statusDTO
  {
    public static List<Management_statusDTO> List_status=new List<Management_statusDTO>();
    static int cnt = 0;
    [DataMember]
    // public stri Id { get; set; }
    public string Name { get; set; }
    [DataMember]
    public string  Description { get; set; }
    public string Color { get; set; }
    public Management_statusDTO()
    {
      // Name = name;
      // Color = color;
      // cnt++;
      // List_status.Add(this);
    }
  
    
  }
}
