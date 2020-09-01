// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Text;
// using System.Threading.Tasks;

// namespace Super_gmach.classes.petty_cash
// {
//     class Current_expenditure : Expenditure
//     {
//         public DateTime Payment_time { get; set; }
//         public string Type { get; set; }
//         public Current_expenditure(int amount, string purpose, string recipient,string type) : base(amount, purpose, recipient)
//         {
//             Payment_time = DateTime.Now;
//             Type = type;
//         }
//         public Current_expenditure ConvertFuture(Future_expenditure FE,string type)
//         {
//             Current_expenditure current = new Current_expenditure(FE.Amount, FE.Purpose, FE.Recipient, type);
//             return current;
//         }
//         public override string ToString()
//         {
//             return base.ToString()+ "Current "+"Type:"+Type;
//         }
//     }
// }
