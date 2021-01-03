using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.classes.fund
{
 public class FundDTO
  {

    public string Fund_name { get; set; }
    public string Status { get; set; }
    public int Required_months { get; set; }
    public bool required_vip { get; set; }
    public bool required_friend { get; set; }
    public string Comments { get; set; }
    public DateTime date_create { get; set; }
    public string Id { get; set; }
    public int balance { get; set; }
    public int Futurbalance { get; set; }
  }
}
