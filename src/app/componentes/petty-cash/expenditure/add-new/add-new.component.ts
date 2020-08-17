import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Payment_FormE } from 'src/app/classes/expense';
import { ExpenditureService } from 'src/app/services/expenditure.service';
import { Expenditure } from 'src/app/classes/expenditure';
import { StatusService } from 'src/app/services/status.service';
import { status } from 'src/app/classes/status';
import { numberOnly as NumberOnly,letterOnly,validation, futureDay} from 'src/Validation';

import { data } from 'jquery';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss'],

})
export class AddNewComponent implements OnInit {
  numberOnly=NumberOnly;
  FutureDay=futureDay;
  LetterOnly=letterOnly;
  Validation=validation;
  ReceivespatternValid=true;
  LetterValid=true;
  messageLetterinValid="!הכנס תוים ואותיות בלבד";

  statuslist:status[];
  messageADD:{};
  public FormAddExpense: FormGroup;
  public paymentMethod;
  public Contemporary_expenditure: boolean = false;

  constructor(private serviceExpense: ExpenditureService, public router: Router,private statusServic:StatusService) { }
  Add() {
    this.Validation();
    let expenditure:Expenditure=new Expenditure();
    if(this.FormAddExpense.get('Contemporary').value)
    {
      expenditure.real_date=new Date();
      expenditure.way_of_payment=this.FormAddExpense.get('PaymentForm').value;
      expenditure.future_date=null;
      this.statuslist.forEach(s => {
        if(s.Name=="performed")
        {
          expenditure.status=s;
        }
      });
    }
    else{
      if(this.FormAddExpense.get('date').value==null)
      {
        alert("בהוצאות עתידות חייב להיות תאריך עתיד");
         return;
      }
      this.statuslist.forEach(s => {
        debugger
        if(s.Name=="future")
        {
          expenditure.status=s;
        }
      });
      expenditure.future_date=this.FormAddExpense.get('date').value;
    }
    expenditure.Receives=this.FormAddExpense.get('Receives').value;
    expenditure.amount=this.FormAddExpense.get('Expense_amount').value;
    expenditure.purpose=this.FormAddExpense.get('Purpose').value;
 debugger
  var succeedAdding=this.serviceExpense.add(expenditure);
  if(succeedAdding)
   { alert("התווסף בהצלחה");}
   else {alert("כישלון בהספה")}
  }
  public Show() {
  
    this.Contemporary_expenditure = !this.Contemporary_expenditure;
  }


  ngOnInit(): void {
    debugger
   this.statusServic.GetStatus().subscribe(s=>{
    this.statuslist=<status[]>s;
    });
    this.Contemporary_expenditure = true;
    this.FormAddExpense = new FormGroup(
      {
        status:new FormControl(),
        date: new FormControl(),
        Expense_amount:new FormControl(null,Validators.required) ,
        Purpose: new FormControl(null,Validators.required),
        file: new FormControl(),
        PaymentForm: new FormControl(),
        Contemporary: new FormControl(),
        Receives:new FormControl(null,Validators.required)
      })
      var  data={סכום:this.FormAddExpense.controls.Expense_amount.value,
        תאריך:this.FormAddExpense.controls.date.value?this.FormAddExpense.controls.date.value:new Date(),
        מוטב:this.FormAddExpense.controls.Receives.value
}
      this.messageADD={buttonText:"הוסף הוצאה",data:data,title:"אישור הוספת הוצאה"};
    
  }
  

  

  SetPaymentMethod(e)
  {
    this.paymentMethod=JSON.parse(e);
    console.log( this.paymentMethod.value)
  }

  SetDetalisCardit(e)
  {
    debugger
    this.DetalisCardit= e;
    console.log(this.DetalisCardit);
    // console.log(JSON.parse(e)+" e");
  }
  DetalisCardit:{}
  // sendData:{}={messege:"הכנס פרטי אשראי",buttonText:"הכנס אשראי לביצוע עיסקה"}
}
