using System;
using System.Linq;
using Dal1;

namespace SGmach.Entity
{
  class Program
  {
    static void Main(string[] args)
    {
      using (var dbSG = new  SuperGmachEntities())
      {
        dbSG.Add(new Status {description="בוטל",name ="cancle"});
        // dbSG.Add(new Exception {Data= " 2/03/2020" ,name ="cancle"});
      }

    }
  }
}
