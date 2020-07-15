using DTO.classes.user_classes;
using System.Collections.Generic;
using BL.BLclasses;
using System.Web.Http;
using System.Web.Http.Cors;


namespace API.Controllers
{
  [RoutePrefix("api/User")]
  [EnableCors(origins: "*", headers: "*", methods: "*")]
  public class UsersController : ApiController
  {
    [HttpPost]
    [Route("addUser")]
    public string AddUser(UserDTO u)
    {
      //Console.WriteLine(u.ToString());
      return UserBL.AddnewUser(u);
    }

    [HttpGet]
    [Route("getUsersList")]
    public List<UserDTO> GetUsers()
    {
      return UserBL.GetUsersList();
    }

  }
}
