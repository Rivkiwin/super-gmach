import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Friend } from 'src/gmach/classes/friend';
import { Loan } from 'src/gmach/classes/Loan';
import { LoanService } from 'src/gmach/services/loan.service';
import { futureDay, validation } from 'src/ts/Validation';

@Component({
  selector: 'app-loan-edit',
  templateUrl: './loan-edit.component.html',
  styleUrls: ['./loan-edit.component.css'],
  providers:[DatePipe]
})
export class LoanEditComponent implements OnInit {
   loan:Loan
  constructor(private activeRouter:ActivatedRoute,private LoanService:LoanService,private datePipe:DatePipe) { }
  message = { title: '', body: '', href: '', buttonText: "הוסף ", click: "this.Add()" };
  Load: FormGroup;
  idUser;
  user:Friend;
  futureDay = futureDay;
  SetUser(event) {
    debugger
    this.user = <Friend> JSON.parse( event);
    this.idUser=this.user.id;
  }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(res => (this.LoanService.GetById(res.get('id')).subscribe(l=>{
      this.loan=<Loan>l;
      console.log(l);
   
    this.Load = new FormGroup({
      remark: new FormControl(this.loan.remark),
      // loan_status: new FormControl({value:this.loan.s}),
      id_load: new FormControl(),
      loan_status:new FormControl({value:this.loan.loan_status}),
      amount: new FormControl({value:this.loan.amount,disabled:this.loan.loan_status!="Unauthorized"}),
      payments: new FormControl(this.loan.payments),
      date_start: new FormControl({ value:this.datePipe.transform(this.loan.date_start, "yyyy-MM-dd"),disabled:this.loan.loan_status!="Unauthorized"}),
      month: new FormControl({value:this.loan.month,disabled:this.loan.loan_status!="Unauthorized"}),
    });
  })
  ));
    this.LoanService.getFutureBalances().subscribe(x=>console.log(x));
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
    NewLoan.loan_status = this.Load.get('loan_status').value;
    NewLoan.paid = false;
    NewLoan.userName=null;
    NewLoan.remark = this.Load.get('remark').value;
    console.log(NewLoan);
    // this.LoanService.Edit(NewLoan).subscribe(
    //   {
    //     next: data => {
    //       debugger
    //       this.message.title = "ההוצאה נוספה בהצלחה";
    //       this.message.body = "הפרטים נשמרו בהצלחה לחזרה לרשימת ההוצאות לחץ אישור";
    //       this.message.href = "patty_cash/Expnditure/List";
    //     },
    //     error: error =>{
    //       this.message.title = "יש תקלה בהוספה";
    //       this.message.body = "הפרטים לא נשמרו אנא פנה לתמיכה";
    //       this.message.href = "patty_cash/Expnditure/List";
    //     }
    //   }
    // );;;
  }
}



