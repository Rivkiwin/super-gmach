import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FocusController } from 'ag-grid-community';
import { Deposit } from 'src/app/classes/Deposit';
import { Friend } from 'src/app/classes/friend';
import { DepositService } from 'src/app/services/deposit.service';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { validation } from 'src/Validation';

@Component({
  selector: 'app-add-deposit',
  templateUrl: './add-deposit.component.html',
  styleUrls: ['./add-deposit.component.scss']
})
export class AddDepositComponent implements OnInit {
   User:Friend;
  //  message=false;
   AddResult;
   fundId;
   message={title:'',body:'',href:'',buttonText:"הוסף הפקדה"};
   type=["קבוע","משתנה"];
   paymentMethod;
   deposit:Deposit;
   FormAddDeposit:FormGroup;
  constructor(private depositService:DepositService) { }
  SetPaymentMethod(e)
  {
    this.paymentMethod=JSON.parse(e);
    // console.log( this.paymentMethod.value)
  };
  SetFundId(e)
  {
    debugger
    this.fundId=e;
  } ;
  SetUser(e)
  {
    debugger
    var data=JSON.parse(e)
    this.User=<Friend>data;
  }
  ngOnInit(): void {
    this.FormAddDeposit=new FormGroup({
      amount:new FormControl(),
      type:new FormControl()
    });
  }

  Add()
  {
    validation();
   var  deposit:Deposit=new Deposit() ;
    deposit.amount=this.FormAddDeposit.get('amount').value;
    deposit.user_id=this.User.Id;
    deposit.user_name=this.User.First_name+" "+this.User.Last_name;
    deposit.type=this.FormAddDeposit.get('type').value;
    deposit.date= new Date();
    deposit.fund_id=this.fundId;
    this.message.title="ההפקדה הוספה בהצלחה";
    this.message.body="הפרטים נשמרו בהצלחה לחזרה לרשימת ההפקדות לחץ אישור";
    this.message.href="patty_cash/deposit/List";

    this.depositService.Add(deposit).pipe(
      catchError(this.handleError));
   
    
    
    console.log(deposit);
  }
  handleError(error: HttpErrorResponse){
    debugger
    console.log("erro on get data");
    this.message.title="שגיאה בהוספת ההפקדה";
    this.message.body="יש תקלה בשמירת הנתונים אנא בדוק את התקינות או פנה לתמיכה";
    this.message.href="#";
      return throwError(error);
  }
  
}
