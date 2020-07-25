
using BI.BLclasses;
using BL.BLclasses;
using DTO.classes;
using DTO.classes.fund;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace API.Controllers
{
  [RoutePrefix("api/Fund")]
  public class FundController:ApiController
  {
    [HttpGet]
    [Route("UsersInFund/{id}")]
    public IHttpActionResult UsersInFund([FromUri] string id)
    {
      List<User_in_fundDTO> lUsers;
      try
      {
        lUsers = UserBL.Get_users_byFund(int.Parse(id));

      }
      catch (Exception e)
      {

        return BadRequest(e.ToString());
      }
      return Ok(lUsers);
    }


    [HttpGet]
    [Route("GetFunds")]
    public IHttpActionResult GetFunds()
    {
      List<FundDTO> fList;
      try
      {
        fList= FundBL.GetList();
      }
      catch (Exception e)
      {

        return BadRequest(e.ToString());
      }
      return Ok(fList);
    }


    [HttpGet]
    [Route("GetFundGyID/{id}")]
    public IHttpActionResult GetFundByID([FromUri]string id)
    {
      FundDTO fund;
      try
      {
        fund= FundBL.GetById(int.Parse(id));
        
      }
      catch (Exception e)
      {
        return BadRequest(e.ToString());
      }
      return Ok(fund);
    }
  }
}
