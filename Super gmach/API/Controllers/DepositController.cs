using BI.BLclasses;
using DTO.classes.deposut;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace API.Controllers
{
  [RoutePrefix("api/Deposit")]
  [EnableCors(origins: "*", headers: "*", methods: "*")]

  public class DepositController : ApiController
  {
    [HttpPost]
    [Route("Add")]
    public IHttpActionResult AddDeposit(DepositDetails deposit)
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
    public IHttpActionResult GetList()
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
    public IHttpActionResult Update(DepositDetails deposit)
    {
      try
      {
        DepositBL.update(deposit);
      }
      catch (Exception e)
      {
        return BadRequest(e.ToString());
      }
      return Ok();
    }
    [HttpGet]
    [Route("getById/{id}")]
    public IHttpActionResult GetById([FromUri] int id)
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
    public IHttpActionResult GetByUserId([FromUri] int id)
    {
      List<DepositDTO> deposits = new List<DepositDTO>();
      try
      {
        deposits = DepositBL.getByUserId(id);
      }
      catch (Exception e)
      {

        return BadRequest(e.ToString());
      }
      return Ok(deposits);
    }
  }
}
