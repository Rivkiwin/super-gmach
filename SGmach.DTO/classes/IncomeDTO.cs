using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.classes
{
  public class IncomeDTO
  {
    public int Id { get; set; }
    public string Id_Gmach { get; set; }
    public int Amount { get; set; }
    public DateTime Date { get; set; }
    public string From { get; set; }
    public string Payment_method { get; set; }
    public string remark { get; set; }

        public override string ToString()
        {
            return  "id "+Id+" Amount "+Amount+" date "+Date +" from "+From;
        }

  

  }
}
