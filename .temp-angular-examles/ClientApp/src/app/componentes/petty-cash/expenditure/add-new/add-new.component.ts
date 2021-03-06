import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Payment_FormE } from 'src/app/classes/expense';
import { ExpenditureService } from 'src/app/services/expenditure.service';
import { Expenditure } from 'src/app/classes/expenditure';
import { StatusService } from 'src/app/services/status.service';
import { status } from 'src/app/classes/status';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss'],

})
export class AddNewComponent implements OnInit {
  status:status[]=[];
  public FormAddExpense: FormGroup;
  public EPayment_FormE = Payment_FormE;
  public Contemporary_expenditure: boolean = false;
  public keyPayment_Form(): Array<string> {
    var keys = Object.keys(this.EPayment_FormE);
    return keys.slice(keys.length / 2);
  }
  constructor(private serviceExpense: ExpenditureService, public router: Router,private statusServic:StatusService) { }
  Add() {
    let expenditure:Expenditure=new Expenditure();
    if(this.FormAddExpense.get('Contemporary').value)
    {
      expenditure.Date=new Date();
      expenditure.Way_of_payment=this.FormAddExpense.get('PaymentForm').value;
      this.status.forEach(s => {
        if(s.Name==="performed")
        {
          expenditure.Status=s;
        }
      });
    }
    else{
      if(this.FormAddExpense.get('date').value==null)
      {
        alert("בהוצאות עתידות חייב להיות תאריך עתיד");
         return;
      }
      this.status.forEach(s => {
        debugger
        if(s.Name=="future")
        {
          expenditure.Status=s;
        }
      });
      expenditure.Date=this.FormAddExpense.get('date').value;
    }
    expenditure.Receives=this.FormAddExpense.get('Receives').value;
    expenditure.Amount=this.FormAddExpense.get('Expense_amount').value;
    expenditure.Purpose=this.FormAddExpense.get('Purpose').value;
 debugger
  this.serviceExpense.add(expenditure);
  }
  public Show() {
  
    this.Contemporary_expenditure = !this.Contemporary_expenditure;
  }

  

  ngOnInit(): void {
    this.statusServic.GetStatus().subscribe(
      s=>{this.status=<status[]>s,console.log(s)}
    )
    this.Contemporary_expenditure = true;
    this.FormAddExpense = new FormGroup(
      {
        status:new FormControl(),
        date: new FormControl(),
        Expense_amount:new FormControl() ,
        Purpose: new FormControl(),
        file: new FormControl(),
        PaymentForm: new FormControl(),
        Contemporary: new FormControl(),
        Receives:new FormControl()
      })

  }

}
