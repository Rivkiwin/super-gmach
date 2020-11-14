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
    public string Id { get; set; }
    [DataMember]
    public string Name { get; set; }
    [DataMember]
    public string Color { get; set; }
    public Management_statusDTO(string name, string color)
    {
      Name = name;
      Color = color;
      cnt++;
      List_status.Add(this);
    }
    public override string ToString()
    {
      return "Management_status: " + Name;
    }
    
  }
}
