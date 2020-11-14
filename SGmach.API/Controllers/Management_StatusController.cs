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

namespace API.Controllers
{
  [Route("api/management_Status")]
  [EnableCors()]
  public class Management_StatusController:ControllerBase
  {
    [HttpPost]
   [Route("SetManagement_status")]
    public string AddManagement_Status([FromBody]Management_statusDTO status)
    {
      return Management_statusBL.AddStatus(status);
    }

    [HttpPost("{id}")]
    [Route("GetManagement_statusById")]
    public Management_statusDTO GetManagement_statusById(string id)
    {
      return Management_statusBL.GetByName(id);
    }

    [HttpGet]
      [Route("geManagement_status")]
      public List<Management_statusDTO> GetManagement_status()
     {
      
       return Management_statusBL.GetManagement_statusList();
      }
  

  }
}
