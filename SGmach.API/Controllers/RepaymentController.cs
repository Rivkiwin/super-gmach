using DTO.classes;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using SGmach.BL.BLclasses;

namespace SGmach.API.Controllers
{
    [Route ("api/Repayment")]
  [EnableCors ()]
  public class RepaymentControll :ControllerBase
  {
    [HttpPost]
    [Route ("Update")]
      public void Update ([FromBody] RepaymentsDTO repayment) {
      RepaymentBL.Update (repayment);
    }
}

}