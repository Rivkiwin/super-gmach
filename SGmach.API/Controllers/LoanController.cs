using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BI.BLclasses;
using BL.BLclasses;
using DTO.classes;
using DTO.classes.income;
using DTO.classes.user_classes;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using SGmach.BL.BLclasses;

namespace API.Controllers {
  [Route ("api/Loan")]
  [EnableCors ()]

  public class LoanController : ControllerBase {
    [HttpPost]
    [Route ("Delete")]
    public void Delete ([FromBody] int LoanId) {
      LoanBL.Delte (LoanId);
    }

    [HttpPost]
    [Route("Add")]
    public void AddLoan ([FromBody] LoanDTO loan) {
      LoanBL.Add (loan);
    }

    [HttpPost]
    [Route("Update")]
    public void Update ([FromBody] LoanDTO loan) {
      LoanBL.Update (loan);
    }

    [HttpGet]
    [Route ("get")]
    public ActionResult GetAll () {
      return Ok (LoanBL.GetAll ());
    }

    [HttpGet]
    [Route ("GetById/{id}")]
    public LoanDTO GetById ([FromRoute] int id) {
      return LoanBL.GetByID (id);
    }

    [HttpGet]
    [Route ("getRepayments")]
    public ActionResult GetRepayments () {
      return Ok (RepaymentBL.GetAll ());
    }

    [HttpGet]
    [Route ("getRepaymentById/{id}")]
    public ActionResult getRepaymentById ([FromRoute] int id) {

      return Ok (RepaymentBL.getRepaymentById (id));
    }
  }

}