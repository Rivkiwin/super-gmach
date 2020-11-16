
using BL.BLclasses;
using DTO.classes.user_classes;
using SGmach.Entity;
using SGmach.Entity.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.convertions
{
  public  class Userconvert
    {
        public static SGmach.Entity.Models.User DTOtoDAL(UserDTO user)
        {
      //Console.WriteLine(user.ToString());
            User newUser = new User() {
                UserId = user.Id_user,
              firstName = user.First_name,
              lastname = user.Last_name, 
              father_name=user.Father_name,
                VIP = user.Vip,
              frirnd = user.Friend,
              //status_User = user.Status_user,
           NameManagement_status = user.NameManagement_status,
                phon1 = user.Communication_ways.Phon1,
              phon2 = user.Communication_ways.Phon2,
              email_addres = user.Communication_ways.Email_addres,
                city = user.Communication_ways.City,
              street = user.Communication_ways.Street,
              num_street = user.Communication_ways.Num_street,
              MaritalStatus=user.MaritalStatus,
              remarks=user.Remarks,
              Status_reason=user.Status_reason
              //bankName = user.Bank_Details.Name,
              //brunchName = user.Bank_Details.Brunch, account_number = user.Bank_Details.Account_number,
              //  ciling = user.Bank_Details.Ciling, collection_date = user.Bank_Details.Collection_date, remarks = user.Remarks,
              //Manager_permissions =  user._Manager, father_name=user.Father_name,Scoring=user.Scoring, id=user.Id,
              // joining_date=user.Joining_date ,Status_reason=user.Status_reason 
               
    };
            Console.WriteLine(newUser);
            return newUser;
        }
        public static UserDTO DALtoDTO(User user)
        {
      
      UserDTO newUser = new UserDTO() {
        Id_user = user.UserId,
        last_Debit_order=user.last_Debit_order,
        Id = user.UserId,
        First_name = user.firstName,
        Last_name = user.lastname,
        Vip = user.VIP,
        Friend = user.frirnd,
        //Status_user = (Status_userE)user.status_User.GetValueOrDefault(),
        Father_name = user.father_name,
        Status_reason=user.Status_reason,
        Scoring =user.Scoring,
        Remarks = user.remarks,
        MaritalStatus=user.MaritalStatus,
        Communication_ways = new Communication(user.phon1, user.phon2, user.email_addres, user.city, user.street, user.num_street),
        // Bank_Details = new Bank_details(user.bankName, user.brunchName, user.account_number.GetValueOrDefault(), user.Bank_account_owner),
        Joining_date = (DateTime)user.joining_date,
        Management_status = Management_statusBL.GetByName(user.NameManagement_status),
        _Manager = (int)user.Manager_permissions.GetValueOrDefault()
      };
       SuperGmachEntities db = new SuperGmachEntities ();
      Credit credit=db.Credits.FirstOrDefault(c=>c.UserId==user.UserId);
      if(credit!=null)
      {
      newUser.Crdit=new Crdit(){
         CVV=credit.CVV,
         Number=credit.Number,
         Token=credit.Token,
         
      };
      }
      BankDetails bankDetails=db.BankDetails.FirstOrDefault(b=>b.UserId==user.UserId);
         newUser.Bank_Details=new Bank_details(){
           Account=bankDetails.Account,
           Bank=bankDetails.Bank,
           Brunch=bankDetails.Branch,
           Owner=bankDetails.owner,
           UserId=bankDetails.UserId.ToString()
         };
      
            return newUser;
      }
    }
}
