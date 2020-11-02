import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';

import { numberOnly as NumberOnly, numberOnly} from 'src/ts/Validation';
import { letterOnly,validation } from 'src/ts/Validation';
import { from } from 'rxjs';
import { Credit } from 'src/gmach/classes/Credit';
import { FriendsService } from 'src/gmach/services/friends.service';


@Component({
  selector: 'CreditDetails',
  templateUrl: './credit-details.component.html',
  styleUrls: ['./credit-details.component.css']
})
export class CreditDetailsComponent implements OnInit {
  numberOnly=NumberOnly;
  LetterOnly=letterOnly;
  
  idpattern=false;
  cvvpattern=false;
  cardNumPattern=false;
  Data;
  // Validation=validation;
  carditForm: FormGroup ;
  constructor(private userservice:FriendsService) { }
  // @Input() set data(d) {
  //   console.log(d);
  //   this.Data = JSON.parse(d);
  // }
  @Output()carditDitails: EventEmitter<Credit> = new EventEmitter<Credit>();
  @Input() UserID:number
  @Input() credit:Credit

  ngOnInit(): void {
    debugger
    this.carditForm=new FormGroup({
      CVV: new FormControl(this.credit.cvv, [Validators.required, Validators.pattern("^[0-9]*$")]),
      idOwners: new FormControl(this.credit.idOwners?this.credit.idOwners:null),
      cardHolder: new FormControl(this.credit.owner, Validators.required),
      Validity: new FormControl(this.credit.validity, Validators.required),
      Number: new FormControl(this.credit.number, Validators.required)
    });
  }  
  submit() {
   validation();
   debugger
  
    this.userservice.AddCredit(this.carditForm.value,this.UserID);
    // this.carditDitails.emit(this.carditForm.value); 
    
  }


}
