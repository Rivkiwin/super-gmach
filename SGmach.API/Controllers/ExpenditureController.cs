using BI.BLclasses;
using DTO.classes;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController()]
    [Route("api/Expenditure")]
    [EnableCors()]
    [Authorize]
    public class ExpenditureController : ControllerBase
    {
      [HttpPost]
      [Route("addexpenditure")]
      public string AddExpenditure(ExpenditureDTO expenditure)
      {
        return ExpenditureBL.AddExpenditure(expenditure);
      }

      [HttpGet]
      [Route("getListGetexpenditure")]
      public List<ExpenditureDTO> Getexpenditure()
      {
        return ExpenditureBL.GetExpendituresList();
      }

    }
}

