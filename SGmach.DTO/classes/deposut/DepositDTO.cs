using DTO.classes;
using DTO.classes.fund;
using DTO.classes.user_classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.classes.income
{
 public class DepositDTO
  {
    public int Id { get; set; }
    public int user_id { get; set; }
    public int amount { get; set; }
    public int fund_id { get; set; }
    public string type { get; set; }
    public string status_id { get; set; }
    public System.DateTime date { get; set; }
  }
}
