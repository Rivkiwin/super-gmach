import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  Formedetails: FormGroup;

  constructor() { }
  ngOnInit(): void {
    this.Formedetails = new FormGroup({
      dateIncome: new FormControl(),
      FromWho: new FormControl(),
      purpose: new FormControl(),
      amount: new FormControl(),
      wayPay: new FormControl(),
    });
  }
   AddIncome() {
    
  }
}


