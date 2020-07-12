
using DTO.classes.user_classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BL.BLclasses;
using System.Web.Http;

using System.Web.Http.Cors;
using BL.convertions;


namespace API.Controllers
{
  [RoutePrefix("api/management_Status")]
  [EnableCors(origins: "*", headers: "*", methods: "*")]
  public class Management_StatusController:ApiController
  {
    [HttpPost]
   [Route("SetManagement_status")]
    public string AddManagement_Status(Management_statusDTO status)
    {
      return Management_statusBL.AddStatus(status);
    }

    [HttpPost]
    [Route("GetManagement_statusById")]
    public Management_statusDTO GetManagement_statusById(int id)
    {
      return Management_statusBL.GetById(id);
    }

    [HttpGet]
      [Route("geManagement_status")]
      public List<Management_statusDTO> GetManagement_status()
     {
       return Management_statusBL.GetManagement_statusList();
      }
    [HttpGet]
    [Route("geManagement_status")]
    public List<Management_statusDTO> GetManagement_statusByName()
    {
      return Management_statusBL.GetManagement_statusList();
    }

  }
}
