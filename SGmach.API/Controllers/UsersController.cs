using System.Collections.Generic;
using BL.BLclasses;
using DTO.classes.user_classes;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace SGmach.API.Controllers
{
  [Route("api/User")]
  [EnableCors()]
  [Authorize]
  [ApiController]
  public class UsersController : ControllerBase
  {
    [HttpPost]
    [Route("add")]
    public string AddUser(UserDTO u)
    {
      //Console.WriteLine(u.ToString());
      return UserBL.AddnewUser(u);
    }

    [HttpGet]
    [Route("get")]
    public List<UserDTO> GetUsers()
    {
      return UserBL.GetUsersList();
    }

  }
}
