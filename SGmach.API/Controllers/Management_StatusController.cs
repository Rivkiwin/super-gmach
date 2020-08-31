using BL.BLclasses;
using DTO.classes.user_classes;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace SGmach.API.Controllers
{
  [Route("api/management_Status")]
  [EnableCors()]
  [Authorize]
  [ApiController]
  public class Management_StatusController : ControllerBase
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
    public string GetManagement_status()
    {
      return "eee";
      //return Management_statusBL.GetManagement_statusList();
    }
  }
}
