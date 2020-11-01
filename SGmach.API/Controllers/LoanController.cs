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
  [Route("api/Loan")]
  [EnableCors()]
  
  public class LoanController : ControllerBase
  {
    [HttpPost]
    [Route("Add")]
    public void AddLoan([FromBody]LoanDTO loan)
    {
      LoanBL.Add(loan);
    }

    [HttpPost]
    [Route("Update")]
    public void Update([FromBody]LoanDTO loan)
    {
      LoanBL.Update(loan);
    }
    [HttpGet]
    [Route("get")]
    public ActionResult GetAll()
    {
      return Ok(LoanBL.GetAll());
    }
    [HttpGet]
    [Route("GetById/{id}")]
    public LoanDTO GetById([FromRoute]int id)
    {
      return LoanBL.GetByID(id);
    }
  }
}
