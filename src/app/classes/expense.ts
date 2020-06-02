export enum Payment_FormE
{
    cash,EFT,cheque,cardit
}
export class Expense {
    Date;
    Amount;
    Purpos;
    paymentFrom;
    constructor(date,amount,purpos,paymentFrom)
    {
      this.Date=date;
      this.Amount=amount;
      this.Purpos=purpos;
      this.paymentFrom=paymentFrom
    }
}
