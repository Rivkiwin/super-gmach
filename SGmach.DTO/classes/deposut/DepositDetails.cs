using DTO.classes.fund;
using DTO.classes.user_classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.classes.income
{
 public class DepositDetails
  {
    public int Id { get; set; }
    public string user_name { get; set; }
    public int UserId { get; set; }
    public int amount { get; set; }
    public int fund_id { get; set; }
    public string FundName { get; set; }
    public string name { get; set; }
    public string type { get; set; }
    public string status { get; set; }
    public System.DateTime date { get; set; }

  }
}
