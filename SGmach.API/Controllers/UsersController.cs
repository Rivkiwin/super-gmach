using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Resources;
using System.Web;
using SGmach.Entity.Models;
using BI.BLclasses;
using BL.BLclasses;
using DTO.classes;
using DTO.classes.income;
using DTO.classes.user_classes;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using SGmach.BL.BLclasses;

namespace API.Controllers {

  [Route ("api/User")]
  [EnableCors ()]
  public class UsersController : ControllerBase {
    [HttpPost]
    [Route ("add")]
    public int AddUser ([FromBody] UserDTO user) {
      // Console.WriteLine(u.ToString());
      // Communication Communication = 
      // UserDTO user=  date.User;
      //  UserDTO user= date["User"].ToObject<UserDTO>();
      // user.Communication_ways= date["Communication"]!=null?date["Communication"].ToObject<Communication>():null;
      // user.Bank_Details= date["Bank"] != null?date["Bank"].ToObject<Bank_details>():null;
      return UserBL.AddnewUser (user);

    }
    [HttpGet]
    [Route ("get")]
    public ActionResult GetUsers () {
     ListUsers users = UserBL.GetUsersList ();
      return Ok (users);
    }

    [HttpGet]
    [Route ("getAlerts")]
    public ActionResult GetAlerts () {
      List<AlertsUsers> Alerts = UserBL.GetAlerts ();
      return Ok (Alerts);
    }

    [HttpGet]
    [Route ("getUserById/{id}")]
    public ActionResult GetUserById ([FromRoute] int id) {
      return Ok (UserBL.GetUserById (id));
    }

    [HttpPost]
    [Route ("Edite")]
    public int Edite ([FromBody] UserDTO user) {
      return UserBL.Edite (user);
    }

    [HttpPost]
    [Route ("AddCredit")]
    public void AddCredit ([FromBody] CerditD creditD) {
      // var sum=  1+1;
      // UserBL.AddCredit(cerditD);

      UserBL.AddCredit (creditD.cerdit, creditD.UserID);
      // return Ok();

    }

     [HttpPost]
    [Route ("SetBankDetails")]
    public void SetBankDetails([FromBody] Bank_details bankDetails) {
      UserBL.SetBankDetails(bankDetails);
      // return ok ();
    }
        [HttpPost]
    [Route ("collectDebit_order")]
    public void collectDebit_order([FromBody]Debit_order debit_Order)
    {
      UserBL.collectDebit_order(debit_Order);
    }
  }


  public class CerditD {
    public Crdit cerdit { get; set; }
    public int UserID { get; set; }
  }
}