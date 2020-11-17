import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Deposit } from 'src/gmach/classes/Deposit';
import { Friend } from 'src/gmach/classes/friend';
import { DepositService } from 'src/gmach/services/deposit.service';
import { validation } from 'src/ts/Validation';

@Component({
  selector: 'app-add-deposit',
  templateUrl: './add-deposit.component.html',
  styleUrls: ['./add-deposit.component.css']
})
export class ADDDepositComponent implements OnInit {

  User;
  //  message=false;
  AddResult;
  fundId;
  message = { title: '', body: '', href: '', buttonText: "הוסף הפקדה", click: "this.Add()" };
  paymentMethod;
  deposit: Deposit;
  FormAddDeposit: FormGroup;
  constructor(private depositService: DepositService,private activeRoute:ActivatedRoute) {
    this.activeRoute.paramMap.subscribe(res=>{
      this.fundId=res.get('FundId');
      this.User=res.get('FreindId');
   });
  }
  SetPaymentMethod(e) {
    this.paymentMethod = JSON.parse(e);
    // console.log( this.paymentMethod.value)
  };
 
  ngOnInit(): void {
    // document.getElementById("Add-B").addEventListener("click",this.Add);
    this.FormAddDeposit = new FormGroup({
      amount: new FormControl(),
      type: new FormControl(),
      Payment_method:new FormControl(),
    });
  }

  Add(event) {
    if(event.target.id!="Add-B")
    {
      return
    }
    validation();
    debugger
    console.log("hii");
    var deposit: Deposit = new Deposit();
    deposit.amount = this.FormAddDeposit.get('amount').value;
    deposit.userId = this.User;
    // deposit.user_name = this.User.first_name + " " + this.User.last_name;
    deposit.Payment_method = this.FormAddDeposit.get('Payment_method').value;
    deposit.date = new Date();
    deposit.type = this.FormAddDeposit.get('type').value;
    deposit.fundId = this.fundId;
    debugger
    this.depositService.Add(deposit).subscribe(
      {
        next: data => {
          debugger
          this.message.title = "ההפקדה הוספה בהצלחה";
          this.message.body = "הפרטים נשמרו בהצלחה לחזרה לפרטי הקרן לחץ אישור";
          this.message.href = "FundDetails/"+this.fundId;
        },
        error: error =>  {
          debugger
          this.message.title = "תקלה בשמירת הנתונים"
          this.message.body = "הפרטים לא נשמרו אנא פנה לתמיכה";
          this.message.href = "FundDetails/"+this.fundId;
        },
      }
    );



    console.log(deposit);
  }
}
