using System;
using System.Linq;
using SGmach.Entity.Models;

namespace SGmach.Entity
{
  class Program
  {
    static void Main(string[] args)
    {
      using (var dbSG = new  SuperGmachEntities())
      {
        dbSG.Add(new Status {NameStatus="canceled",Description ="בוטל"});
        dbSG.Add(new Status {NameStatus="future",Description ="עתידי"});
        dbSG.Add(new Status {NameStatus="Happy",Description ="מאושר"});
        dbSG.Add(new Status {NameStatus="performed",Description ="בוצע"});
        // dbSG.Add(new Exception {Data= " 2/03/2020" ,name ="cancle"});
        dbSG.SaveChanges();
      }

    }
  }
}
