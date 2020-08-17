using DTO.classes.fund;
using DTO.classes.user_classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.classes.deposut
{
 public class DepositDetails
  {
    public int Id { get; set; }
    public string user_name { get; set; }
    public int user_id { get; set; }
    public int amount { get; set; }
    public int fund_id { get; set; }
    public string FundName { get; set; }
    public string name { get; set; }
    public string type { get; set; }
    public StatusDTO status { get; set; }
    public System.DateTime date { get; set; }

  }
}
