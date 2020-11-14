using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.classes.user_classes
{
  public class UserFund
  {
    public int FundId { get; set; }
    public int  Balance  { get; set; }
    public string FundName  { get; set; }
    public  DateTime DateJoin { get; set; }
    
  }
}
