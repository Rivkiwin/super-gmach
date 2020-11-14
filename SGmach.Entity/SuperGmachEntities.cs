using System;
using System.Collections.Generic;
using System.Linq;

using Microsoft.EntityFrameworkCore;
using SGmach.Entity.Models;

namespace SGmach.Entity
{
    public class SuperGmachEntities : DbContext
    {
                public DbSet<BankDetails> BankDetails { get; set; }
        public DbSet<Income> Incoms { get; set; }
        public DbSet<Loan> Loans { get; set; }
        public DbSet<Repayments> Repayments { get; set; }
        public DbSet<Expenditure> Expenditure { get; set; }
        public DbSet<Fund> Funds { get; set; }
        public DbSet<Management_status> ManagementStatuses { get; set; }
        public DbSet<Status> Statuses { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<User_in_fund> UserInFunds { get; set; }
        public DbSet<withdrawing> Withdrawing { get; set; }
        public DbSet<Deposit> Deposits { get; set; }
        public DbSet<Credit> Credits { get; set; }
        public DbSet<Collection> Collections { get; set; }

        public SuperGmachEntities(
            DbContextOptions<SuperGmachEntities> options) : base(options)
        {
        }

        public SuperGmachEntities()
        {
        }



        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite("Data Source=gmach.db");
    }
}