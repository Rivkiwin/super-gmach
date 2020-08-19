using System;
using System.Collections.Generic;
using System.Linq;
using Dal1;
using Microsoft.EntityFrameworkCore;

namespace SGmach.Entity
{


    public class SuperGmachEntities : DbContext
    {
       public DbSet<Expenditure> Expenditure { get; set; }
      public DbSet<Fund> Fund { get; set; }
      public DbSet<Management_status> ManagementStatuses { get; set; }
      public DbSet<Status> Statuses { get; set; }
      public DbSet<User> Users { get; set; }
      public DbSet<User_in_fund> UserInFunds { get; set; }
      public DbSet<withdrawing> Withdrawing { get; set; }





      protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlite("Data Source=gmach.db");




  }
}
