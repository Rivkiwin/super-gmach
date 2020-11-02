import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankDetails } from 'src/gmach/classes/Bank-detalis';
import { FriendsService } from 'src/gmach/services/friends.service';
import { validation,numberOnly, letterOnly } from 'src/ts/Validation';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {
  
  LetterOnly=letterOnly;
  numberOnly=numberOnly;
  BankForm: FormGroup ;
  constructor(private friendService:FriendsService) {
   }
   @Input() BankDetails:BankDetails
  // @Output() BankDetails:EventEmitter<BankDetails>= new EventEmitter<BankDetails>();
  ngOnInit(): void {
    debugger
    this.BankForm=new FormGroup({
    Bank: new FormControl(this.BankDetails.bank),
    Brunch: new FormControl(this.BankDetails.brunch),
    Account: new FormControl(this.BankDetails.account),
    owner:new FormControl(this.BankDetails.owner),
    UserId:new FormControl(this.BankDetails.userId),
    id: new FormControl()
  });
  }
  save()
  {
     this.friendService.SetBankDEtails(this.BankForm.value);
    // this.BankDetails.emit(this.BankForm.value);
  }
}
