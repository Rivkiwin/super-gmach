using DTO.classes.fund;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.classes.user_classes
{
   public class UserDetalis
  {
    public UserDTO User { get; set; }
    public List<User_in_fundDTO> Fundslist;
  }
}
