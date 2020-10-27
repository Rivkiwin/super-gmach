using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.classes
{
  public class ExpenditureDTO
  {
    public DateTime Date { get; set; }
    public int Id { get; set; }
    public int Amount { get; set; }
    public string Purpose { get; set; }
    public string Way_of_payment { get; set; }
    public string Receives { get; set; }
    public string Status { get; set; }

    public ExpenditureDTO() { }

  }
}
