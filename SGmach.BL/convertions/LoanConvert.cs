
using BL.BLclasses;
using DTO.classes;
using SGmach.Entity;
using SGmach.Entity.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BI.convertions
{
  public class LoanConvert
  {
    public static Loan DTOtoDAL (LoanDTO loan)
    {
      Loan loanDAL = new Loan()
      {
        Amount=loan.amount,
        RepaymentStart=loan.date_start,
        Months=loan.month,
       UserId=loan.id_user,
        NameManagement_status = loan.loan_status,
        //management_status=loan.management_status,
        //guarantee_1=loan.guarantee1,
        //guaantee_2=loan.guarantee2,
        //payments=loan.payments,
        remark =loan.remark,
        Score =loan.Score,
        // BeginningRepayment = loan.BeginningRepayment,
        EnteryDate = loan.EntryDate,
        LoanId = loan.id_loan,
        Num_payments = loan.NumRepayment,
        // paid = loan.paid

      };
      return loanDAL;
    }
    public static LoanDTO DALtoDTO(Loan loan)
    {
      LoanDTO loanDTO = new LoanDTO()
      {
        amount = loan.Amount,
        date_start = loan.RepaymentStart,
        month = loan.Months,
        id_user = loan.UserId,
        loan_status = loan.NameManagement_status,
        //management_status = loan.management_status,
        //guarantee1 = loan.guarantee_1,
        //guarantee2 = loan.guaantee_2,
        //payments = loan.payments,
        remark = loan.remark,
        Score = (int)loan.Score,
        status=Management_statusBL.GetByName(loan.NameManagement_status),
        // BeginningRepayment = loan.BeginningRepayment,
        EntryDate = loan.EnteryDate,
         id_loan=loan.LoanId,
         // management_Status=loan.management_status,
           NumRepayment=loan.Num_payments,
            // paid= loan.paid

      };
      using (SuperGmachEntities db  = new SuperGmachEntities())
      {
        User user = db.Users.FirstOrDefault(u => u.UserId == loan.UserId);
        loanDTO.UserName = user.firstName + " " + user.lastname;
      }
        return loanDTO;
    }
  }
}
