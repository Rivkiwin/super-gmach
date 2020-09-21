
using BL.BLclasses;
using DTO.classes.user_classes;
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
        public static User DTOtoDAL(UserDTO user)
        {
      //Console.WriteLine(user.ToString());
            User newUser = new User() {
                UserId =(int)user.Id_user,
              firstName = user.First_name,
              lastname = user.Last_name,
                VIP = user.Vip,
              frirnd = user.Friend,
              NameStatus = user.Status_user,
              NameManagement_status= user.Management_status.Name,
                phon1 = user.Communication_ways.Phon1,
              phon2 = user.Communication_ways.Phon2,
              email_addres = user.Communication_ways.Email_addres,
                city = user.Communication_ways.City,
              street = user.Communication_ways.Street,
              num_street = user.Communication_ways.Num_street,
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
        // Id = user.id,
        First_name = user.firstName,
        Last_name = user.lastname,
        Vip = user.VIP,
        Friend = user.frirnd,
        Status_user = user.MaritalStatus,
        Father_name = user.father_name,
    
        Scoring =user.Scoring,
        Remarks = user.remarks,
        Communication_ways = new Communication(user.phon1, user.phon2, user.email_addres, user.city, user.street, user.num_street),
        Bank_Details = new Bank_details(user.BankDetails.Bank, user.BankDetails.Branch, user.BankDetails.Account, user.Credit.Ciling, user.collection_date),
        Joining_date = (DateTime)user.joining_date,
        Management_status = Management_statusBL.GetById(user.NameManagement_status),
        _Manager = (int)user.Manager_permissions.GetValueOrDefault(),Status_reason=user.Status_reason

      };
            return newUser;
        }
    }
}
