using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BI.BLclasses;
using BL.BLclasses;
using DTO.classes;
using DTO.classes.fund;
using DTO.classes.income;
using DTO.classes.user_classes;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace API.Controllers {
  [Route ("api/Fund")]
  [EnableCors ()]
  public class FundController : ControllerBase {
    [HttpGet]
    [Route ("UsersInFund/{id}")]
    public ActionResult UsersInFund ([FromRoute] string id) {
      List<User_in_fundDTO> lUsers;
      try {
        lUsers = UserBL.Get_users_byFund (id);

      } catch (Exception e) {

        return BadRequest (e.ToString ());
      }
      return Ok (lUsers);
    }

    [HttpGet]
    [Route ("GetAll")]
    public ActionResult GetFunds () {
      List<FundDTO> fList;
      try {
        fList = FundBL.GetList ();
      } catch (Exception e) {

        return BadRequest (e.ToString ());
      }
      return Ok (fList);
    }

    [HttpGet]
    [Route ("GetByID/{id}")]
    public ActionResult GetFundByID ([FromRoute] string id) {
      FundDTO fund;
      try {
        fund = FundBL.GetById (id);

      } catch (Exception e) {
        return BadRequest (e.ToString ());
      }
      return Ok (fund);
    }

    [HttpGet]
    [Route ("GetUsersToAdd/{id}")]
    public ActionResult GetUsersToAdd ([FromRoute] string id) {
      List<UserDTO> users;
      try {
        users = FundBL.GetUsersToAdd (id);

      } catch (Exception e) {
        return BadRequest (e.ToString ());
      }
      return Ok (users);
    }

    [HttpGet]
    [Route ("getFutureBalances")]
    public ActionResult getFutureBalances() {
      DateTime date = DateTime.Now;
      int thisMonth = date.Month;
      // int size =5;
      int[] FutureBalances = new int[6];
      for (int month = 0; month < 6; month++) {
        FutureBalances[month] = FundBL.GetFutureBalance ("1", date );
        date=date.AddMonths(1);
      }
      return Ok (FutureBalances);
    }

    [HttpPost]
    [Route ("AddFriends")]
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
    public string FundId { get; set; }
  }
}