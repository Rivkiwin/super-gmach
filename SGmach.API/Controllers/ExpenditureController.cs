using System.Net;
using BI.BLclasses;
using DTO.classes.income;
using Microsoft.AspNetCore.Cors;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using DTO.classes;
using System.Threading.Tasks;

namespace API.Controllers
{
  
    [Route("api/Expenditure")]
    //[EnableCors(origins: "*", headers: "*", methods: "*")]
    [EnableCors()]
    public class ExpenditureController : ControllerBase
    {
      [HttpPost]
      [Route("addexpenditure")]
      public ActionResult<ExpenditureDTO> AddExpenditure([FromBody]ExpenditureDTO expenditure)
      {
      try
      {
         ExpenditureBL.AddExpenditure(expenditure);
      }
      catch (Exception e)
      {
        return BadRequest(e.ToString());
      }
      return Ok(expenditure);
      }

      [HttpGet]
      [Route("getListGetexpenditure")]
    public ActionResult  Getexpenditure()
      {
      List<ExpenditureDTO> expenditures = new List<ExpenditureDTO>();
      try
      {
        expenditures =ExpenditureBL.GetExpendituresList();
      }
      catch (Exception e)
      {

        return BadRequest(e.ToString());
      }
      return Ok(expenditures);

    }
    [HttpGet]
    [Route("getListGetexpenditure/{id}")]
    public ExpenditureDTO GetexpenditureById([FromRoute] int id)
    {
      return ExpenditureBL.GetByID(id);
    }

    [HttpPost]
    [Route("updateExpenditure")]
    public  ActionResult UpdateExpenditure([FromBody]ExpenditureDTO ex)
    {
      try
      {
        ExpenditureBL.updateExpenditure(ex);
      }
      catch (Exception e)
      {

        return BadRequest(e.ToString());
      }
      return Ok();
    }
    [HttpPost("{ExpenditureId}")]
    [Route("cancelExpenditure")]
    public ActionResult CancelExpenditure(int ExpenditureId)
    {
      try
      {
        ExpenditureBL.cancelExpenditure(ExpenditureId);
      }
      catch (Exception e)
      {

        return BadRequest(e.ToString());
      }
      return Ok();
    }
  }
}

