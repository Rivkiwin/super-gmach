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
                ciling = user.Bank_Details.Ciling, collection_date = user.Bank_Details.Collection_date, remarks = user.Remarks, Manager_permissions = user.Is_he_manager() ? user._Manager.Permissions : 0,
               
    };
            Console.WriteLine(newUser);
            return newUser;
        }
        public static UserDTO DALtoDTO(User user)
        {
            UserDTO newUser = new UserDTO() {
                Bank = (int)user.bank, Id_user = user.id, Id = user.id, First_name = user.firstName, Last_name = user.lastname,
                Vip = (bool)user.VIP, Friend = (bool)user.frirnd,Status_user=(Status_userE)user.status_User,/*Management_status=new Management_statusDTO(*/
            };
            return newUser;
        }
    }
}
