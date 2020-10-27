using BI.BLclasses;
using DTO.classes.income;
using Microsoft.AspNetCore.Cors;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using DTO.classes;
using BL.BLclasses;

namespace API.Controllers
{
  [Route("api/Withdrawals")]
  [EnableCors()]
  public class WithdrawalsController:ControllerBase
  {
    [HttpGet]
    [Route("GetAll")]
    public ActionResult GetAll()
    {
      List<WithdrawalsDTO> Withdrawals = WithdrawalsBL.GetAll();
      return Ok(Withdrawals);
    }
   
    [HttpGet]
    [Route("GetByUser/{id}")]
    public ActionResult GetByUser([FromQuery]int id)
    {
      List<WithdrawalsDTO> Withdrawals = WithdrawalsBL.GetByUser(id);
      return Ok(Withdrawals);
    }

    [HttpGet]
    [Route("GetByFund/{id}")]
    public ActionResult GetByFund([FromQuery]int id)
    {
      List<WithdrawalsDTO> Withdrawals = WithdrawalsBL.GetByFund(id);
      return Ok(Withdrawals);
    }
    [HttpGet]
    [Route("GetById")]
    public ActionResult GetById([FromQuery]int id)
    {
      WithdrawalsDTO Withdrawals = WithdrawalsBL.GetById(id);
      return Ok(Withdrawals);
    }

    [HttpPost]
    [Route("update")]
    public ActionResult Update([FromBody]WithdrawalsDTO withdrawal)
    {
      try
      {
        WithdrawalsBL.Updete(withdrawal);
        return Ok();
      }
      catch (Exception e)
      {
        return BadRequest(e.ToString());
      }
      
    }

    [HttpPost]
    [Route("add")]
    public ActionResult Add([FromBody]WithdrawalsDTO withdrawal)
    {
      try
      {
        WithdrawalsBL.Add(withdrawal);
        return Ok();
      }
      catch (Exception e)
      {
        return BadRequest(e.ToString());
      }

    }
  }
}
