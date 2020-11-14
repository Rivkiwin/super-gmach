using DTO.classes.user_classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.classes
{
  public class LoanDTO
  {
    public int id_loan { get; set; }
    public int id_user { get; set; }
    public int amount { get; set; }
    public int month { get; set; }
    public int Score { get; set; }
    public DateTime date_start { get; set; }
    public string loan_status { get; set; }

    public Management_statusDTO status { get; set; }
    //public int management_status { get; set; }
    //public Management_statusDTO management_Status { get; set; }
    public string remark { get; set; }
    //public int payments { get; set; }
    //public string guarantee1 { get; set; }
    //public string guarantee2 { get; set; }
    public bool paid { get; set; }
    public string UserName { get; set; }
    public DateTime BeginningRepayment { get; set; }
    public DateTime EntryDate { get; set; }
    public int NumRepayment { get; set; }
    public List<RepaymentsDTO> Repayments;
    public LoanDTO()
    {
      this.Repayments = new List<RepaymentsDTO>();
    }

   
  }
}
