import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Router } from '@angular/router';
 import {StatusE} from "src/gmach/classes/fund-class";
import {FundServiceService} from "src/gmach/services/fund-service.service";
import { validation } from 'src/ts/Validation';

@Component({
  selector: 'app-fund-form',
  templateUrl: './fund-form.component.html',
  styleUrls: ['./fund-form.component.scss']
})
export class FundFormComponent implements OnInit {
  public Form_new_fund:FormGroup;
  message = { title: '', body: '', href: '', buttonText: "הוסף ", click: "this.addFund()" };
  statusE=StatusE;
  public keyStatusFund():Array<string>
  {
   var keys = Object.keys(this.statusE);
   return keys.slice(keys.length / 2);
  }
  constructor(public fundServic:FundServiceService,public router:Router) { }

  ngOnInit(): void {
    this.Form_new_fund=new FormGroup({
      name:new FormControl(),
      Details:new FormControl(),
      month:new FormControl(),
      status:new FormControl(),
      required_vip:new FormControl()
    })

}
 addFund(event):void
    {
      if(event.target.id!="Add-B")
      {
        return
      }
      validation()

      this.fundServic.add(this.Form_new_fund.value).subscribe(
        {
          next: data => {
            debugger
            this.message.title = "הקרן נוספה בהצלחה";
            this.message.body = "למעבר לפרטי הקרן לחץ אישור ";
            this.message.href = "friends/detalis/"+data;
          },
          error: error =>{
            this.message.title = "יש תקלה בהוספה";
            this.message.body = "הפרטים לא נשמרו אנא פנה לתמיכה";
            this.message.href = "#";
          }
        });

    }
}
