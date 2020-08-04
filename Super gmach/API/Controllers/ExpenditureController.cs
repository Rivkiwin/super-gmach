using BI.BLclasses;
using DTO.classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace API.Controllers
{
    [RoutePrefix("api/Expenditure")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ExpenditureController : ApiController
    {
      [HttpPost]
      [Route("addexpenditure")]
      public IHttpActionResult AddExpenditure(ExpenditureDTO expenditure)
      {
      try
      {
         ExpenditureBL.AddExpenditure(expenditure);
      }
      catch (Exception e)
      {
        return BadRequest(e.ToString());
      }
      return Ok();
      }

      [HttpGet]
      [Route("getListGetexpenditure")]
      public List<ExpenditureDTO> Getexpenditure()
      {
        return ExpenditureBL.GetExpendituresList();
      }
    [HttpGet]
    [Route("getListGetexpenditure/{id}")]
    public ExpenditureDTO GetexpenditureById([FromUri] int id)
    {
      return ExpenditureBL.GetByID(id);
    }

    [HttpPost]
    [Route("updateExpenditure")]
    public  IHttpActionResult UpdateExpenditure(ExpenditureDTO ex)
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
    [HttpPost]
    [Route("cancelExpenditure")]
    public IHttpActionResult CancelExpenditure(int ExpenditureId)
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

