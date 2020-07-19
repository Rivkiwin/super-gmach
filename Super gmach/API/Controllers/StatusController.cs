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
  [RoutePrefix("api/Status")]
  [EnableCors(origins: "*", headers: "*", methods: "*")]
  public class StatusController : ApiController
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


