using DTO.classes.fund;
using DTO.classes.user_classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.classes
{
  public class WithdrawalsDTO
  {
    public int Id { get; set; }
    public string FundId { get; set; }
    public DateTime Date { get; set; }
    public int Amount { get; set; }
    public string FriendName { get; set; }
    public int FriendId { get; set; }
    public string Status { get; set; }
    public string Fund { get; set; }
    public string PaymentMethod { get; set; }
  }
}
