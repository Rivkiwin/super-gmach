using DAL;
using DTO.classes.user_classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Management_status = DTO.classes.user_classes.Management_statusDTO;

namespace BI.BLclasses
{
    class Management_statusBL
    {
        public static List<Management_status> GetManagement_statusList()
        {
            List< Management_status > userList = new List<Management_status>();
            using (SuperGmachEntities db = new SuperGmachEntities())
            {
                //foreach (Management_status status in db.Management_status)
                //{
                //  // userList.Add(Userconvert.DALtoDTO(status));
                //}

            }
            return userList;
        }
    }
}
