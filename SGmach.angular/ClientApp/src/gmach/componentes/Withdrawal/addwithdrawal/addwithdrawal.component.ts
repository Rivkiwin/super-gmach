import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {futureDay,numberOnly, validation } from 'src/ts/Validation';
  import { from } from 'rxjs';
import { Withdrawals } from 'src/gmach/classes/withdrawals';
import { WithdrawalsService } from 'src/gmach/services/withdrawals.service';
import { withModule } from '@angular/core/testing';
import { StatusService } from 'src/gmach/services/status.service';
import { status } from 'src/gmach/classes/status';
@Component({
  selector: 'addwithdrawal',
  templateUrl: './addwithdrawal.component.html',
  styleUrls: ['./addwithdrawal.component.css']
})
export class AddwithdrawalComponent implements OnInit {
  Fwithdrawal:FormGroup;
  fundId:Number=2;
  status:status;
  message = { title: '', body: '', href: '', buttonText: "הוסף ", click: "this.Add()" };
  constructor(private WithdrawalService:WithdrawalsService,private statusService:StatusService) 
  { 
  }
  Wayw;
  setWayw(e)
  {
    this.Wayw=JSON.parse(e);
    this.Wayw=this.Wayw.value;
  }
  @Input() FreindId;
  
  futureDay=futureDay;
   date= Date.now();
  ngOnInit(): void {
    this.Fwithdrawal=new FormGroup({
      Date:new FormControl(),
      Fund:new FormControl(this.fundId?this.fundId:2),
      Amount:new FormControl(100),
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
    validation;
     var Withdrawal:Withdrawals=new Withdrawals();
     Withdrawal.Amount=this.Fwithdrawal.get("Amount").value;
     Withdrawal.Date=this.Fwithdrawal.get("Date").value;
     Withdrawal.UserId=this.FreindId;
     Withdrawal.paymentMethod=this.Wayw;
     Withdrawal.Status=this.Fwithdrawal.get("Status").value;;
     Withdrawal.FundId=this.Fwithdrawal.get("Fund").value;;
     debugger;
    this.statusService.GetStatus().subscribe(
      s=>{var status=<status[]>s;
          status.map(st => {
             if(st.id==this.Fwithdrawal.get("Status").value)
             {
               Withdrawal.Status=st;
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
