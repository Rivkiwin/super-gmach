
using BL.BLclasses;
using DAL;

using DTO.classes.user_classes;
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
            User newUser = new User() {
                bank = user.Bank, id_user = user.Id_user, firstName = user.First_name, lastname = user.Last_name,
                VIP = user.Vip, frirnd = user.Friend, status_User = (int)user.Status_user, Management_status = user.Management_status.Id,
                phon1 = user.Communication_ways.Phon1, phon2 = user.Communication_ways.Phon2, email_addres = user.Communication_ways.Email_addres,
                city = user.Communication_ways.City, street = user.Communication_ways.Street, num_street = user.Communication_ways.Num_street,
                bankName = user.Bank_Details.Name, brunchName = user.Bank_Details.Brunch, account_number = user.Bank_Details.Account_number,
                ciling = user.Bank_Details.Ciling, collection_date = user.Bank_Details.Collection_date, remarks = user.Remarks,
              Manager_permissions =  user._Manager, father_name=user.Father_name,Scoring=user.Scoring, id=user.Id,
               joining_date=user.Joining_date  
               
    };
            Console.WriteLine(newUser);
            return newUser;
        }
        public static UserDTO DALtoDTO(User user)
        {
      
      UserDTO newUser = new UserDTO() {
        Bank = user.bank.GetValueOrDefault(),
        Id_user = user.id,
        Id = user.id,
        First_name = user.firstName,
        Last_name = user.lastname,
        Vip = user.VIP.GetValueOrDefault(),
        Friend = user.frirnd.GetValueOrDefault(),
        Status_user = (Status_userE)user.status_User.GetValueOrDefault(),
        Father_name = user.father_name,
    
        Scoring =user.Scoring.GetValueOrDefault(),
        Remarks = user.remarks,
        Communication_ways = new Communication(user.phon1, user.phon2, user.email_addres, user.city, user.street, user.num_street),
        Bank_Details = new Bank_details(user.bankName, user.brunchName, user.account_number, user.ciling, user.collection_date),
        Joining_date = (DateTime)user.joining_date.GetValueOrDefault(),
        Management_status = Management_statusBL.GetById(user.Management_status.GetValueOrDefault()),
        _Manager = (int)user.Manager_permissions.GetValueOrDefault(),

      };
            return newUser;
        }
    }
}
