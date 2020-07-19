using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.classes
{
  public class ExpenditureDTO
  {
    public DateTime future_date { get; set; }
    public DateTime real_date { get; set; }
    public int id { get; set; }
    public int amount { get; set; }
    public string purpose { get; set; }
    public string way_of_payment { get; set; }
    public string Receives { get; set; }
    public StatusDTO status { get; set; }
    public string future_date_String;

    public ExpenditureDTO() {
      future_date_String = future_date.ToShortDateString();
    }

  }
}
