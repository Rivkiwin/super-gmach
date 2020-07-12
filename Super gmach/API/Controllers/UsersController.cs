using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

using BL.BLclasses;


using System.Web.Http.Cors;
using DTO.classes.user_classes;

namespace API.Controllers
{[RoutePrefix("api/user")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UsersController:ApiController
    {
        [HttpPost]
       [Route("addUser")]
        public string AddUser(UserDTO u)
        {
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
