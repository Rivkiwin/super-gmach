using BI.BLclasses;
using BI.convertions;
using DTO.classes;
using SGmach.Entity.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using db = SGmach.Entity.SuperGmachEntities;

namespace BL.BLclasses
{
public class WithdrawalsBL
  {
    public static void Add(WithdrawalsDTO withdrawalDTO)
    {
      withdrawing withdrawal = WithdrawalsConvert.DTOtoDAL(withdrawalDTO);
      db DB = new db();
      DB.Withdrawing.Add(withdrawal);
      if (withdrawalDTO.Status== "Approved")
      {
        FundBL.Subtract_Balance(withdrawalDTO.Amount, withdrawalDTO.FundId);
      }
      DB.SaveChanges();
    }

    public static void Updete(WithdrawalsDTO withdrawalDTO)
    {
      db DB = new db();
      withdrawing withdrawal = DB.Withdrawing.FirstOrDefault(w => w.Id == withdrawalDTO.Id);
      //if it changed to Approved
      if (withdrawal.NameStatus!= "Approved" && withdrawalDTO.Status== "Approved")
      {
        FundBL.Subtract_Balance(withdrawalDTO.Amount, withdrawalDTO.FundId);
      }
      else
      {
        //if it was performed and changed to canceled
        if (withdrawal.NameStatus == "performed" && withdrawalDTO.Status == "canceled")
        {
          FundBL.AddBalance(withdrawalDTO.Amount, withdrawalDTO.FundId);
        }
      }
      withdrawal.Amount = withdrawalDTO.Amount;
      withdrawal.Date = withdrawalDTO.Date;
      // withdrawal.paymentMethod = withdrawalDTO.PaymentMethod;
      withdrawal.NameStatus = withdrawalDTO.Status;
      DB.SaveChanges();
    }

    public static List<WithdrawalsDTO> GetAll()
    {
      List<WithdrawalsDTO> withdrawalsDTOs = new List<WithdrawalsDTO>();
      db DB = new db();
     List<withdrawing> withdrawals = DB.Withdrawing.ToList();
      foreach(withdrawing withdrawal in withdrawals)
      {
        withdrawalsDTOs.Add(WithdrawalsConvert.DALtoDTO(withdrawal));
      }
      return withdrawalsDTOs;
    }

    public static List<WithdrawalsDTO> GetByFund(int FundId)
    {
      List<WithdrawalsDTO> withdrawalsDTOs = new List<WithdrawalsDTO>();
      db DB = new db();
      List<withdrawing> withdrawals = DB.Withdrawing.Where(w=>w.FundId==FundId.ToString()).ToList();
      foreach (withdrawing withdrawal in withdrawals)
      {
        WithdrawalsDTO withdrawalDTO = WithdrawalsConvert.DALtoDTO(withdrawal);

      //  User_in_fund  User= DB.User_in_fund.FirstOrDefault(u => u.userID == withdrawal.UserId);
       // withdrawalDTO.User = UserBL.Get_user_byFund(FundId, withdrawal.UserId);
        withdrawalsDTOs.Add(withdrawalDTO);
      }
      return withdrawalsDTOs;
    }

    public static List<WithdrawalsDTO> GetByUser(int userId)
    {
      List<WithdrawalsDTO> withdrawalsDTOs = new List<WithdrawalsDTO>();
      db DB = new db();
      List<withdrawing> withdrawals = DB.Withdrawing.Where(w => w.UserId == userId).ToList();
      foreach(withdrawing withdrawal in withdrawals)
      {
        WithdrawalsDTO withdrawalDTO = WithdrawalsConvert.DALtoDTO(withdrawal);
        withdrawalDTO.Fund = DB.Funds.FirstOrDefault(f => f.FundId == withdrawal.FundId).fund_name;
        withdrawalsDTOs.Add(withdrawalDTO);
      }
      return withdrawalsDTOs;
    }

    public static WithdrawalsDTO GetById(int id)
    {
      WithdrawalsDTO withdrawalsDTO = new WithdrawalsDTO();
      db DB = new db();
      var withdrawal = DB.Withdrawing.FirstOrDefault(w => w.Id == id);
      withdrawalsDTO = WithdrawalsConvert.DALtoDTO(withdrawal);
      return withdrawalsDTO;
    }
  }
}
