using System.Collections.Generic;
using BI.BLclasses;
using DTO.classes;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace SGmach.API.Controllers
{
  [Route("status")]
  [EnableCors()]
  [Authorize]
  [ApiController]
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

      [HttpGet]
      [Route("get")]
      public List<StatusDTO> getStatus()
      {
        return StatusBL.GetList();
      }

  }
}


