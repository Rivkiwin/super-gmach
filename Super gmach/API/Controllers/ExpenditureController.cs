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
    [HttpGet]
    [Route("getListGetexpenditure/{id}")]
    public ExpenditureDTO GetexpenditureById([FromUri] int id)
    {
      return ExpenditureBL.GetByID(id);
    }

  }
}

