import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {futureDay,numberOnly, validation } from 'src/ts/Validation';
  import { from } from 'rxjs';
import { Withdrawals } from 'src/gmach/classes/withdrawals';
import { WithdrawalsService } from 'src/gmach/services/withdrawals.service';
import { withModule } from '@angular/core/testing';
import { StatusService } from 'src/gmach/services/status.service';
import { status } from 'src/gmach/classes/status';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'addwithdrawal',
  templateUrl: './addwithdrawal.component.html',
  styleUrls: ['./addwithdrawal.component.css']
})
export class AddwithdrawalComponent implements OnInit {
  Fwithdrawal:FormGroup;
  FundId;
  FreindId;
  max;
  status:status;
  message = { title: '', body: '', href: '', buttonText: "הוסף ", click: "this.Add()" };
  constructor(private WithdrawalService:WithdrawalsService,private statusService:StatusService,private activeRoute:ActivatedRoute) 
  { 
    debugger
    this.activeRoute.paramMap.subscribe(res=>{
      this.FundId=res.get('FundId');
      this.FreindId=res.get('FreindId');
      this.max=res.get('max');
    })
  }
  Wayw;
  setWayw(e)
  {
    this.Wayw=JSON.parse(e);
    this.Wayw=this.Wayw.value;
  }

  futureDay=futureDay;
   date= Date.now();
  ngOnInit(): void {
    this.Fwithdrawal=new FormGroup({
      Date:new FormControl(),
      Fund:new FormControl(this.FundId),
      Amount:new FormControl(this.max,[Validators.max(this.max),Validators.min(1)]),
      Status:new FormControl("future")
    });
  }
  
  Add(event)
  {
    if(event.target.id!="Add-B")
    {
      return
    }
     debugger
   validation()
   if (!this.Fwithdrawal.valid)
   {
     return
   }
     var Withdrawal:Withdrawals=new Withdrawals();
     Withdrawal.amount=this.Fwithdrawal.get("Amount").value;
     Withdrawal.date=this.Fwithdrawal.get("Date").value;
     Withdrawal.paymentMethod=this.Wayw;
     Withdrawal.status=this.Fwithdrawal.get("Status").value;
     Withdrawal.friendId=this.FreindId;
     Withdrawal.fundId=this.FundId;
     
     debugger;
    this.statusService.GetStatus().subscribe(
      s=>{var status=<status[]>s;
          status.map(st => {
             if(st.id==this.Fwithdrawal.get("Status").value)
             {
               Withdrawal.status=st;
             }
          });   
      }
     );
     this.WithdrawalService.Add(Withdrawal).subscribe(
      {
        next: data => {
          debugger
          this.message.title = "המשיכה נוספה בהצלחה";
          this.message.body = "הפרטים נשמרו בהצלחה לחזרה לרשימת כל המשיכות לחץ אישור";
          this.message.href = "patty_cash/Expnditure/List";
        },
        error: error =>{
           this.message.title = "יש תקלה בהוספה";
           this.message.body = `${error} הפרטים לא נשמרו אנא פנה לתמיכה `;
           this.message.href = "patty_cash/Expnditure/List";
        }
      }
    );;
  }
}
