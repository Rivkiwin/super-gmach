import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankDetails } from 'src/gmach/classes/Bank-detalis';
import { validation,numberOnly } from 'src/ts/Validation';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {
  BankForm:FormGroup;
  numberOnly=numberOnly;
  constructor() {
   }
  @Output() BankDetails:EventEmitter<BankDetails>= new EventEmitter<BankDetails>();
  ngOnInit(): void {
    this.BankForm=new FormGroup({
    Bank: new FormControl(),
    Branch: new FormControl(),
    Accoun_number: new FormControl(),
    id: new FormControl()});
  }
  save()
  {
    this.BankDetails.emit(this.BankForm.value);
  }
}
