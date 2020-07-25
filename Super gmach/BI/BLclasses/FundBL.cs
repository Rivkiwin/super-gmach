using BI.convertions;
using Dal1;
using DTO.classes.fund;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DB=Dal1.SuperGmachEntities;
namespace BI.BLclasses
{
 public class FundBL
  {
    public static List<FundDTO> GetList()
    {
      DB db = new SuperGmachEntities();
      List<FundDTO> list = new List<FundDTO>();
      foreach (Fund fund in db.Funds )
      {
        list.Add(FundConvert.DALtoDTO(fund));
      }
      return list;
    }

    public static FundDTO GetById(int id)
    {
      DB db = new SuperGmachEntities();
      foreach (Fund fund in db.Funds)
      {
        if (fund.Id == id)
          return FundConvert.DALtoDTO(fund);
      }
      return null;
    }
  }
}
