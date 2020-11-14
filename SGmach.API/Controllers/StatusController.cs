using BI.BLclasses;
using DTO.classes.income;
using Microsoft.AspNetCore.Cors;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using DTO.classes;
namespace API.Controllers
{
  [Route("api/Status")]
  [EnableCors()]
  public class StatusController : ControllerBase
  {
      //[HttpPost]
      //[Route("addStatus")]
      //public string AddStatus(StatusDTO expenditure)
      //{
      //  return StatusBl.AddExpenditure(expenditure);
      //}

      [HttpGet]
      [Route("getStatusList")]
      public List<StatusDTO> get()
      {
        return StatusBL.GetList();
      }

  }
}


