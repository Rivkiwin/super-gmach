import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';

import { numberOnly as NumberOnly, numberOnly} from 'src/ts/Validation';
import { letterOnly,validation } from 'src/ts/Validation';
import { from } from 'rxjs';
import { Credit } from 'src/gmach/classes/Credit';


@Component({
  selector: 'CreditDetails',
  templateUrl: './credit-details.component.html',
  styleUrls: ['./credit-details.component.css']
})
export class CreditDetailsComponent implements OnInit {
  numberOnly=NumberOnly;
  letterOnly=letterOnly;
  idpattern=false;
  cvvpattern=false;
  cardNumPattern=false;
  Data;
  // Validation=validation;
  carditForm: FormGroup ;
  constructor() { }
  // @Input() set data(d) {
  //   console.log(d);
  //   this.Data = JSON.parse(d);
  // }
  @Output()carditDitails: EventEmitter<Credit> = new EventEmitter<Credit>();
  

  ngOnInit(): void {
    this.carditForm=new FormGroup({
      CVV: new FormControl(null, [Validators.required, Validators.pattern("^[0-9]*$")]),
      id: new FormControl(),
      cardHolder: new FormControl(null, Validators.required),
      cardValidity: new FormControl(null, Validators.required),
      cardNum: new FormControl(null, Validators.required)
    });
  }  
  submit() {
   validation();
   debugger
    this.carditDitails.emit(this.carditForm.value); 
    
  }


}
