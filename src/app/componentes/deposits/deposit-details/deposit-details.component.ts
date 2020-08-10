import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Deposit } from 'src/app/classes/Deposit';
import { ActivatedRoute } from '@angular/router';
import { DepositService } from 'src/app/services/deposit.service';
import { data } from 'jquery';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-deposit-details',
  templateUrl: './deposit-details.component.html',
  styleUrls: ['./deposit-details.component.scss']
})
export class DepositDetailsComponent implements OnInit {

  deposit:Deposit;
  Formedetails:FormGroup;
  constructor(private activeRouter:ActivatedRoute,private depositService:DepositService,public datepipe: DatePipe) { }

  ngOnInit(): void {
    var id;
    this.activeRouter.paramMap.subscribe(res => (id = res.get('id')));
    this.depositService.GetById(id).subscribe(dep=>{
      this.deposit=<Deposit>dep;
      this. SetFormedetails();
    });
   
  }

    SetFormedetails() {
     var data=this.datepipe.transform(this.deposit.date, 'dd-MM-yyyy');
    this.Formedetails = new FormGroup({
      type: new FormControl(this.deposit.type),
      userName: new FormControl({ value: this.deposit.user_name, disabled: true }),
      datePay: new FormControl({ value:data, disabled: false }),
      amount: new FormControl({ value: this.deposit.amount, disabled: false }),
    });
  }
}
