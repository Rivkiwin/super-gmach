using BI.BLclasses;
using DTO.classes.income;
using Microsoft.AspNetCore.Cors;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;


namespace API.Controllers
{
  [Route("api/Deposit")]
  [EnableCors()]

  public class DepositController : ControllerBase
  {
    [HttpPost]
    [Route("AddDeposit")]
    public ActionResult AddDeposit([FromBody]DepositDTO deposit)
    {
      try
      {
        DepositBL.AddDeposit(deposit);
      }
      catch (Exception e)
      {

        return BadRequest(e.ToString());
      }
      return Ok();
    }
    [HttpGet]
    [Route("getList")]
    public ActionResult GetList()
    {
     List<DepositDetails> depositDetails = new List<DepositDetails>();
      try
      {
        depositDetails=DepositBL.GetList();
      }
      catch (Exception e)
      {

        return BadRequest(e.ToString());
      }
      return Ok(depositDetails
);
    }
    [HttpPost]
    [Route("update")]
    public ActionResult Update([FromBody]DepositDetails deposit)
    {
      try
      {
        DepositBL.Update(deposit);
      }
      catch (Exception e)
      {
        return BadRequest(e.ToString());
      }
      return Ok();
    }
    [HttpGet]
    [Route("getById/{id}")]
    public ActionResult GetById([FromRoute]int id)
    {
      DepositDetails deposit = new DepositDetails();
      try
      {
        deposit = DepositBL.GetById(id);
      }
      catch (Exception e)
      {

        return BadRequest(e.ToString());
      }
      return Ok(deposit);
    }
    [HttpGet]
    [Route("getByUserId/{id}")]
    public ActionResult GetByUserId( [FromRoute]int id)
    {
      List<DepositDetails> deposits = new List<DepositDetails>();
      try
      {
        deposits = DepositBL.GetByUserId(id);
      }
      catch (Exception e)
      {

        return BadRequest(e.ToString());
      }
      return Ok(deposits);
    }
    [HttpGet]
    [Route("getByFundId/{id}")]
    public ActionResult GetByFundId([FromRoute]string id)
    {
      List<DepositDetails> deposits = new List<DepositDetails>();
      try
      {
        deposits = DepositBL.GetByFundId(id);
      }
      catch (Exception e)
      {

        return BadRequest(e.ToString());
      }
      return Ok(deposits);
    }
  }
}
