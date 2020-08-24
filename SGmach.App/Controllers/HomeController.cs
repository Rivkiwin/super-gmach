using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class HomeController : Controller
    {
      [Route("app/{*url}")]
      [Authorize]
      public IActionResult App(string url)
      { 
          return Redirect("http://localhost:4201//");
          // return View("App", url);
      }

        public ActionResult Index()
        {
            return View();
        }
        //
        // public ActionResult About()
        // {
        //     ViewBag.Message = "Your application description page.";
        //
        //     return View();
        // }
        //
        // public ActionResult Contact()
        // {
        //     ViewBag.Message = "Your contact page.";
        //
        //     return View();
        // }
    }
}
