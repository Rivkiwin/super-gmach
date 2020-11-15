import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
  import { Friend } from 'src/gmach/classes/friend';
  import { from } from 'rxjs';
  import { Loan } from 'src/gmach/classes/Loan';
  import { validation, futureDay } from 'src/ts/Validation';
import { LoanService } from 'src/gmach/services/loan.service';
@Component({
  selector: 'app-addloan',
  templateUrl: './addloan.component.html',
  styleUrls: ['./addloan.component.css']
})

  export class AddLoadComponent implements OnInit {
  
    constructor(private loanS:LoanService) { }
    message = { title: '', body: '', href: '', buttonText: "הוסף ", click: "this.Add()" };
    Load: FormGroup;
    idUser;
    today=new Date();
    user:Friend;
    fututreBalance:[];
    futureDay = futureDay;
    SetUser(event) {
      debugger
      this.user = <Friend> JSON.parse( event);
      this.idUser=this.user.id;
    }

    
   getDate(i:number)
   {
     debugger
     this.today.setMonth(this.today.getMonth() + +i);
   }
    ngOnInit(): void {
      this.Load = new FormGroup({
        remark: new FormControl(),
        loan_status: new FormControl(),
        id_load: new FormControl(),
        amount: new FormControl(),
        payments: new FormControl(),
        date_start: new FormControl(),
        month: new FormControl(),
        Management_status:new FormControl("Unauthorized")
      });
      this.loanS.getFutureBalances().subscribe(x=>{console.log(x);
      this.fututreBalance=<[]>x});
    }
    Add(event) {
      debugger
      if(event.target.id!="Add-B")
      {
        return
      }
      validation();
      debugger
      var NewLoan = new Loan();
      NewLoan.amount = this.Load.get('amount').value;
      NewLoan.date_start = this.Load.get('date_start').value;
      // NewLoan.guaantee_2 = this.Load.get('guaantee_2').value;
      // NewLoan.guarantee_1 = this.Load.get('guarantee_1').value;
      NewLoan.month = this.Load.get('month').value;
      NewLoan.id_user = this.idUser;
      NewLoan.entryDate=new Date();
      NewLoan.score=0;
      NewLoan.numRepayment=this.Load.get('payments').value
      // NewLoan.BeginningRepayment= this.Load.get('month').value;
      NewLoan.nameStatus = this.Load.get('loan_status').value;
      NewLoan.management_Status = this.Load.get('Management_status').value;
      NewLoan.paid = false;
      NewLoan.userName=null;
      NewLoan.remark = this.Load.get('remark').value;
      console.log(NewLoan);
      this.loanS.Add(NewLoan).subscribe(
        {
          next: data => {
            debugger
            this.message.title = "ההלוואה נוספה בהצלחה";
            this.message.body = "לכניסה לרשימת ההלוואות לחץ אישור";
            this.message.href = "loan/list";
          },
          error: error =>{
            this.message.title = "יש תקלה בהוספה";
            this.message.body = "הפרטים לא נשמרו אנא פנה לתמיכה";
            this.message.href = "patty_cash/Expnditure/List";
          }
        }
      );;;
    }
  }
  
