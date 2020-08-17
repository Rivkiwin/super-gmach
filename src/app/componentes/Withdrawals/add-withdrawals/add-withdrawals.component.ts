import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { Friend } from 'src/app/classes/friend';
import { validation } from 'src/Validation';

@Component({
  selector: 'app-add-withdrawals',
  templateUrl: './add-withdrawals.component.html',
  styleUrls: ['./add-withdrawals.component.scss']
})
export class AddWithdrawalsComponent implements OnInit {
  User:Friend;
  //  message=false;
   AddResult;
   fundId;
   message={title:'',body:'',href:'',buttonText:"הוסף משיכה"};
   paymentMethod;
   FormAddDeposit:FormGroup;
  constructor() { }
  SetPaymentMethod(e)
  {
    this.paymentMethod=JSON.parse(e);
    // console.log( this.paymentMethod.value)
  };
  SetFundId(e)
  {
    debugger
    this.fundId=parseInt(e);
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



