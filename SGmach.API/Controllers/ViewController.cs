using System.ComponentModel;
using db = SGmach.Entity.SuperGmachEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BI.BLclasses;
using BL.BLclasses;
using DTO.classes;
using DTO.classes.income;
using DTO.classes.user_classes;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using SGmach.BL.BLclasses;
namespace SGmach.API.Controllers {

    [Route ("api/View")]
    [EnableCors ()]
    public class ViewController : ControllerBase {
        [HttpGet]
        [Route ("getDEposits&withdrawals")]
        public ActionResult Get () {
            DpositsANDwithdrawals DW = new DpositsANDwithdrawals ();
            db db = new db ();
            for (int i = 0; i < 12; i++) {

                var thisYear = DateTime.Today.Year;
                DW.withdrawals[i] = db.Withdrawing.Where (withdrawal => withdrawal.Date.Month == (i+1) && withdrawal.Date.Year == thisYear).Sum (withdrawal => withdrawal.Amount);
                DW.deposits[i] = db.Deposits.Where (deposit => deposit.Date.Month == (i+1) && deposit.Date.Year == thisYear).Sum (deposit => deposit.Amount);
            }
            return Ok(DW);

        }

         [HttpGet]
        [Route ("getExpnditure&incoms")]
        public ActionResult getExpnditureANDdeposits() {
          ExpnditureANDincoms  expnditureANDincoms  = new ExpnditureANDincoms ();
            db db = new db ();
            for (int i = 0; i < 12; i++) {
                var thisYear = DateTime.Today.Year;
               expnditureANDincoms.incoms[i] = db.Incoms.Where (incom => incom.Date.Month == (i+1) && incom.Date.Year == thisYear).Sum (incom => incom.Amount);
                expnditureANDincoms.expnditure[i] = db.Expenditure.Where (ex => ex.Date.Month == (i+1) && ex.Date.Year == thisYear).Sum (ex => ex.Amount);

            }
            return Ok(expnditureANDincoms);

        }
    }

    public class ExpnditureANDincoms{
        public int[] incoms { get; set; }=new int[12];
        public int[] expnditure { get; set; }=new int[12];
    }
   public class DpositsANDwithdrawals
   {
        public int[] deposits { get; set; }=new int[12];
        public int[] withdrawals { get; set; }=new int[12];
   }

}