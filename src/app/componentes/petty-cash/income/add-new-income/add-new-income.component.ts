import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-add-new-income',
  templateUrl: './add-new-income.component.html',
  styleUrls: ['./add-new-income.component.scss']
})
export class AddNewIncomeComponent implements OnInit {

  iconForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.iconForm=new FormGroup({
      dateIncome: new FormControl(),
      // purpose
      // FromWho
      // PaymentMethods
      // amount:
      
    })
  }

}
