import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Friend } from 'src/gmach/classes/friend';
import { from } from 'rxjs';
import { Loan } from 'src/gmach/classes/Loan';
import { validation, futureDay } from 'src/ts/Validation';
import { LoanService } from 'src/gmach/services/loan.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-addloan',
  templateUrl: './addloan.component.html',
  styleUrls: ['./addloan.component.css'],
  providers: [DatePipe]
})

export class AddLoanComponent implements OnInit {

  constructor(private loanS: LoanService, private DatePipe: DatePipe) { }
  message = { title: '', body: '', href: '', buttonText: "הוסף ", click: "this.Add()" };
  Loan: FormGroup;
  idUser;
  today = new Date();
  user: Friend;
  fututreBalance: [];
  futureDay = futureDay;
  SetUser(event) {
    debugger
    this.user = <Friend>JSON.parse(event);
    this.idUser = this.user.id;
  }

  getMonth()
  {
    var endDate:Date=  this.Loan.get('DateEnd').value;
    // var month= endDate.subscribe
  }

  getDateEnd() {
    var month = this.Loan.get('month').value;
    var date_start:Date =new Date(this.Loan.get('date_start').value);
    var endDate = date_start.setMonth(month+1,date_start.getMonth());

    endDate= new Date(endDate).setDate(1);
    this.Loan.get('DateEnd').setValue(this.DatePipe.transform(endDate, 'yyyy-MM-dd'));
  }
  getDate(i: number) {
    i += 1
    var dd = this.today.getDate();
    var mm = (this.today.getMonth() + i) > 12 ? (this.today.getMonth() + i - 12) : (this.today.getMonth() + i);
    var y = mm > 12 ? this.today.getFullYear() + 1 : this.today.getFullYear();
    var someFormattedDate = dd + '/' + mm + '/' + y;
    return someFormattedDate;
    debugger
     this.today.setMonth(this.today.getMonth() + +i);
  }
  ngOnInit(): void {
    this.Loan = new FormGroup({
      remark: new FormControl(),
      loan_status: new FormControl(),
      id_Loan: new FormControl(),
      amount: new FormControl(),
      payments: new FormControl(1),
      date_start: new FormControl(this.DatePipe.transform(this.today, 'yyyy-MM-dd')),
      month: new FormControl(2),
      DateEnd: new FormControl(),
      Management_status: new FormControl("Unauthorized")
    });
    this.getDateEnd();
    // ;
        this.loanS.getFutureBalances().subscribe(x => {
      console.log(x);
      this.fututreBalance = <[]>x
    });
  }
  Add(event) {
    debugger
    if (event.target.id != "Add-B") {
      return
    }
    validation();
    debugger
    var NewLoan = new Loan();
    NewLoan.amount = this.Loan.get('amount').value;
    NewLoan.date_start = this.Loan.get('date_start').value;
    // NewLoan.guaantee_2 = this.Loan.get('guaantee_2').value;
    // NewLoan.guarantee_1 = this.Loan.get('guarantee_1').value;
    NewLoan.month = this.Loan.get('month').value;
    NewLoan.id_user = this.idUser;
    NewLoan.entryDate = new Date();
    NewLoan.score = 0;
    NewLoan.numRepayment = this.Loan.get('payments').value
    // NewLoan.BeginningRepayment= this.Loan.get('month').value;
    NewLoan.nameStatus = this.Loan.get('loan_status').value;
    NewLoan.management_Status = this.Loan.get('Management_status').value;
    NewLoan.paid = false;
    NewLoan.userName = null;
    NewLoan.remark = this.Loan.get('remark').value;
    console.log(NewLoan);
    this.loanS.Add(NewLoan).subscribe(
      {
        next: data => {
          debugger
          this.message.title = "ההלוואה נוספה בהצלחה";
          this.message.body = "לכניסה לרשימת ההלוואות לחץ אישור";
          this.message.href = "loan/list";
        },
        error: error => {
          this.message.title = "יש תקלה בהוספה";
          this.message.body = "הפרטים לא נשמרו אנא פנה לתמיכה";
          this.message.href = "patty_cash/Expnditure/List";
        }
      }
    );;;
  }
}

