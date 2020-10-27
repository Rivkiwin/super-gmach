using BI.BLclasses;
using DTO.classes.income;
using Microsoft.AspNetCore.Cors;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using DTO.classes;
using DTO.classes.user_classes;
using BL.BLclasses;
using Newtonsoft.Json.Linq;

namespace API.Controllers
{
  [Route("api/User")]
  [EnableCors()]
  public class UsersController : ControllerBase
  {
    [HttpPost]
    [Route("add")]
    public int AddUser([FromBody]UserDTO user)
    {
      //Console.WriteLine(u.ToString());
      //Communication Communication = 
      // UserDTO user=  date.User;
      //  UserDTO user= date["User"].ToObject<UserDTO>();
      // user.Communication_ways= date["Communication"]!=null?date["Communication"].ToObject<Communication>():null;
      // user.Bank_Details= date["Bank"] != null?date["Bank"].ToObject<Bank_details>():null;
      return UserBL.AddnewUser(user);
      
    }

    [HttpGet]
    [Route("get")]
    public ActionResult GetUsers()
    {
      List<UserDTO> users= UserBL.GetUsersList();
      return Ok(users);
    }
    [HttpGet]
    [Route("getAlerts")]
    public ActionResult GetAlerts()
    {
      List<AlertsUsers> Alerts = UserBL.GetAlerts();
      return Ok(Alerts);
    }

    [HttpGet()]
    [Route("getUserById/{id}")]
    public ActionResult GetUserById([FromRoute]int id)
    {
      return Ok(UserBL.GetUserById(id));
    }
  }
}
