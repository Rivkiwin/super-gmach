using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.classes
{
  public class RepaymentsDTO
  {
    public int Id { get; set; }
    public string UserName { get; set; }
     public int UserId { get; set; }
    public int LoanID { get; set; }
    public double Amount { get; set; }
    public System.DateTime Date { get; set; }
    public string status { get; set; }
    public string Remark { get; set; }
  }
}
