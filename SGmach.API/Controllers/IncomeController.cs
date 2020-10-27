using BI.BLclasses;
using Microsoft.AspNetCore.Cors;
using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using DTO.classes;
using System.Text.Json;
using Newtonsoft.Json.Linq;

namespace API.Controllers
{
    [Route("api/Income")]
  [EnableCors()]

  public class IncomeController: ControllerBase
  {
    

    [HttpPost()]
   [Route("Add")]
    public  ActionResult<IncomeDTO> AddIncome([FromBody]IncomeDTO income)
    {
      // System.Text.Json.JsonElement
      // IncomeDTO incomeDTO;
      try
      {

        //  incomeDTO= System.Text.Json.JsonSerializer.Deserialize<IncomeDTO>(income.ToString());
        
        //  incomeDTO=income.ToObject<IncomeDTO>();
        // IncomeDTO incomeDTO=Convert.ChangeType(IncomeDTO,income);
        // IncomeDTO income1=IncomeConvert.DTOtoDAL(incomeDTO);
        IncomeBL.Add(income);

      }
      catch(Exception e)
      {
        return BadRequest(e.ToString());
      }
      return Ok(income);
    }
    [HttpGet]
    [Route("getList")]
    public ActionResult GetList()
    {
       List<IncomeDTO> IncomeDTO;
      try
      {
        IncomeDTO = IncomeBL.GetList();
      }
      catch(Exception e)
      {
        return BadRequest(e.ToString());
      }
      return Ok(IncomeDTO);
    }
  //   [HttpGet("{id}")]
  //   [Route("getById")]
  //   public ActionResult GetById(int id)
  //   {
  //     IncomeDTO income = new IncomeDTO();
  //     try
  //     {
  //       income = IncomeBL.GetById(id);
  //     }
  //     catch(Exception e)
  //     {
  //       return BadRequest(e.ToString());
  //     }
  //     return Ok(income);
  //   }
  }

}
