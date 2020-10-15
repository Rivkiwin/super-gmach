import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Income } from 'src/gmach/classes/Income';
import { IncomeService } from 'src/gmach/services/income.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  Formedetails: FormGroup;
  message = { title: '', body: '', href: '', buttonText: "הוסף ", click: "this.Add()" };

  constructor(private incomeService:IncomeService) { }
  ngOnInit(): void {
    this.Formedetails = new FormGroup({
      dateIncome: new FormControl(),
      FromWho: new FormControl(),
      purpose: new FormControl(),
      amount: new FormControl(),
      wayPay: new FormControl(),
    });
  }
   Add(event) {
    if(event.target.id!="Add-B")
    {
      return
    }
     var newIncome:Income=new Income;
     newIncome.Amount=this.Formedetails.get('amount').value;
     newIncome.Date=this.Formedetails.get('dateIncome').value;
     newIncome.From=this.Formedetails.get('FromWho').value;
     newIncome.purpose=this.Formedetails.get('purpose').value;  
     newIncome.wayPay=this.Formedetails.get('wayPay').value;
     
    //  newIncome.
    this.incomeService.add(newIncome).subscribe(
      {
        next: data => {
          debugger
          this.message.title = "ההכנסה נוספה בהצלחה";
          this.message.body = "הפרטים נשמרו בהצלחה לחזרה לרשימת ההכנסות לחץ אישור";
          this.message.href = "patty_cash/income/List";
        },
        error: error =>{
          this.message.title = "יש תקלה בהוספה";
          this.message.body = "הפרטים לא נשמרו אנא פנה לתמיכה";
          this.message.href = "patty_cash/income/list";
        }
      })
      console.log(this.message)
  
  }
}


