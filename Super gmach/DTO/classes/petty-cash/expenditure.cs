using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
namespace Super_gmach.classes.petty_cash
{
    class Expenditure
    {
        public int Amount { get; set; }
        public string Purpose { get; set; }
        public string Recipient { get; set; }
        public Expenditure(int amount, string purpose, string recipient)
        {
            Amount = amount;
            Purpose = purpose;
            Recipient = recipient;
        }
        // ask public File fil
        public override string ToString()
        {
            return "Purpose:"+ Purpose+ " Amount:"+ Amount+ " recipient:"+Recipient+ "kind:";
        }
    }
    
}
