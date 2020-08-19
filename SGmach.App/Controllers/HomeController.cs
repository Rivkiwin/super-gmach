using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class HomeController : Controller
    {
      [Route("app/{*url}")]
      public IActionResult App(string url)
      {

          return View("App", url);
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
