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
      public int DepositId { get; set; }
        public string GmachId { get; set; }="shavetHchim";
        public int Amount { get; set; }
        public string Type { get; set; }
        public DateTime Date  { get; set; }
        public int UserId { get; set; }
        public string Payment_method { get; set; }
        public string FundId { get; set; }
  }
}
