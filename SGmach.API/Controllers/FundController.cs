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
using DTO.classes.fund;

namespace API.Controllers {
  [Route("api/Fund")]
  [EnableCors ()]
  public class FundController : ControllerBase
   {
    [HttpGet("{id}")]

    [Route("UsersInFund")]
    public ActionResult UsersInFund (int id) {
      List<User_in_fundDTO> lUsers;
      try {
        lUsers = UserBL.Get_users_byFund (id);

      } catch (Exception e) {

        return BadRequest (e.ToString ());
      }
      return Ok (lUsers);
    }

    [HttpGet]
    [Route("GetAll")]
    public ActionResult GetFunds () {
      List<FundDTO> fList;
      try {
        fList = FundBL.GetList ();
      } catch (Exception e) {

        return BadRequest(e.ToString ());
      }
      return Ok(fList);
    }

    [HttpGet()]
    [Route("GetByID/{id}")]
    public ActionResult GetFundByID([FromQuery]string id) {
      FundDTO fund;
      try {
        fund = FundBL.GetById (id);

      } catch (Exception e) {
        return BadRequest (e.ToString ());
      }
      return Ok (fund);
    }

    [HttpGet("{id}")]
    [Route("GetUsersToAdd")]
    public ActionResult GetUsersToAdd (string id) {
      List<UserDTO> users;
      try {
        users = FundBL.GetUsersToAdd (id);

      } catch (Exception e) {
        return BadRequest (e.ToString ());
      }
      return Ok (users);
    }

    [HttpPost]
    [Route("AddFriends")]
    public ActionResult AddFriends ([FromBody] UserAddObject date) {

      try {
        FundBL.AddFriends (date.Friends, date.FundId);
      } catch (Exception e) {

        return BadRequest (e.ToString ());
      }
      return Ok ();
    }
  }
  public class UserAddObject {
    public int[] Friends { get; set; }
    public int FundId { get; set; }
  }
}