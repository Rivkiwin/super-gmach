import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { parse } from 'path';
import { numberOnly as NumberOnly} from '../../../Validation';
import { letterOnly,validation } from '../../../Validation';
import { from } from 'rxjs';


@Component({
  selector: 'app-add-credit',
  templateUrl: './add-credit.component.html',
  styleUrls: ['./add-credit.component.scss']
})
export class AddCreditComponent implements OnInit {
  numberOnly=NumberOnly;
  LetterOnly=letterOnly;
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
  @Output()
  carditDitails: EventEmitter<object> = new EventEmitter<Object>();

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
    if(this.carditForm.valid==true)
    {this.carditDitails.emit(this.carditForm.value) }
    
  }


}
