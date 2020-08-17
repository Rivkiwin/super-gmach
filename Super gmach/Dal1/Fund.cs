//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Dal1
{
    using System;
    using System.Collections.Generic;
    
    public partial class Fund
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Fund()
        {
            this.User_in_fund = new HashSet<User_in_fund>();
            this.Deposits = new HashSet<Deposit>();
        }
    
        public string fund_name { get; set; }
        public Nullable<int> status { get; set; }
        public Nullable<int> required_months { get; set; }
        public Nullable<bool> required_vip { get; set; }
        public string comments { get; set; }
        public Nullable<System.DateTime> date_create { get; set; }
        public int Id { get; set; }
        public Nullable<int> balance { get; set; }
    
        public virtual Status Status1 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<User_in_fund> User_in_fund { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Deposit> Deposits { get; set; }
    }
}
