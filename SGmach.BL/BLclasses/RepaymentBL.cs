using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using db = SGmach.Entity.SuperGmachEntities;
using DTO.classes;
using BI.convertions;
using System.Linq;
using SGmach.Entity.Models;

namespace SGmach.BL.BLclasses {
    public class RepaymentBL {
        public  static List<RepaymentsDTO> GetAll () {
            List<RepaymentsDTO> repyments=new List<RepaymentsDTO>();
            db DB=new db();
            foreach (var repyment in DB.Repayments)
            {
                var r=RepaymentConvert.DALtoDTO(repyment);
                User user=DB.Users.FirstOrDefault(u=>u.UserId==r.UserId);
                r.UserName=user.firstName+" "+user.lastname;
                repyments.Add(r);
            }
            return repyments;
        }
        public static RepaymentsDTO getRepaymentById(int id)
        {
            db DB=new db();
            Repayments repyment=DB.Repayments.FirstOrDefault(r=>r.RepaymentId==id);
             User user=DB.Users.FirstOrDefault(u=>u.UserId==repyment.UserId);
            RepaymentsDTO repaymentDTO=RepaymentConvert.DALtoDTO(repyment);
              repaymentDTO.UserName=user.firstName+" "+user.lastname;
            return repaymentDTO;
            
        }

    }
}