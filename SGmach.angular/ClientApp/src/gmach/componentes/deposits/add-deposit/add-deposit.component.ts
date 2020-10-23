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
  type = ["קבוע", "משתנה"];
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
      type: new FormControl()
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
    deposit.user_id = this.User.Id;
    deposit.user_name = this.User.First_name + " " + this.User.Last_name;
    deposit.type = this.FormAddDeposit.get('type').value;
    deposit.date = new Date();
    deposit.fund_id = this.fundId;

    this.depositService.Add(deposit).subscribe(
      {
        next: data => {
          debugger
          this.message.title = "ההפקדה הוספה בהצלחה";
          this.message.body = "הפרטים נשמרו בהצלחה לחזרה לרשימת ההפקדות לחץ אישור";
          this.message.href = "deposit/list";
        },
        error: error =>  {
          debugger
          this.message.title = "תקלה בשמירת הנתונים"
          this.message.body = "הפרטים לא נשמרו אנא פנה לתמיכה";
          this.message.href = "deposit/list";
        },
      }
    );



    console.log(deposit);
  }
}
