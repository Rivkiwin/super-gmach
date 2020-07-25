export enum Payment_FormE
{
    cash,EFT,cheque,cardit
}
export class Expense {
    
    Amount;
    Purpos;
    // constructor(amount,purpos)
    // {     
    //   this.Amount=amount;
    //   this.Purpos=purpos;
    
    // }
}
export class Future_expenditure extends Expense
{
   Date;
  //  constructor(amount,purpos,date)
  //  {
  //    super(amount,purpos);
  //   this.Date=date;
  //  }
}
export class Contemporary_expenditure extends Expense
{
  Fill;
  Dade_pay;
  PaymentFrom;
//  constructor(amount,purpos,paymentFrom,fill?)
//  {
//    super(amount,purpos);
//    this.Dade_pay=new Date();
//    this.PaymentFrom=paymentFrom;
//    this.Fill=fill;
//  }

}
