import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenditureService } from 'src/app/services/expenditure.service';
import { Payment_FormE } from 'src/app/classes/expense';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss'],
  
})
export class AddNewComponent implements OnInit {
public formAddExpense:FormGroup;
public EPayment_FormE=Payment_FormE;
   public keyPayment_Form():Array<string>
 {
  var keys= Object.keys(this.EPayment_FormE);
  return keys.slice(keys.length / 2);
  }
  constructor(private serviceExpense:ExpenditureService, public router:Router) { }
  Add()
  {
    this.serviceExpense.add(this.formAddExpense.value)
  }
  ngOnInit(): void {
    this.formAddExpense=new FormGroup(
      {
        date:new FormControl(),
        Expense_amount:new FormControl(),
        Purpose:new FormControl(),
        file:new FormControl(),
        PaymentForm:new FormControl()
      })
    
  }

}
