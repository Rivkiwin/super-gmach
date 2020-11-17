import { DatePipe, DOCUMENT } from '@angular/common';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
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
  constructor(private activeRouter:ActivatedRoute,private LoanService:LoanService,private datePipe:DatePipe,@Inject(DOCUMENT) document) { }
  message = { title: '', body: '', href: '', buttonText: "שמור", click: "this.Add()" };
  LoanForm: FormGroup;
  idUser;
 angular;
  user:Friend;
  futureDay = futureDay;
  SetUser(event) {
    debugger
    this.user = <Friend> JSON.parse( event);
    this.idUser=this.user.id;
  }
  disable()
  {
    return this.loan.nameStatus=="active"?false:true;
  }
  ngOnInit(): void {
    // console.log(this.deleteBTN);
    this.activeRouter.paramMap.subscribe(res => (this.LoanService.GetById(res.get('id')).subscribe(l=>{
      this.loan=<Loan>l;
      console.log(l);
   
    this.LoanForm = new FormGroup({
      remark: new FormControl(this.loan.remark),
      // loan_status: new FormControl({value:this.loan.s}),
      id_LoanForm: new FormControl(),
      loan_status:new FormControl(this.loan.nameStatus),
      Management_status:new FormControl(this.loan.management_Status),
      amount: new FormControl(this.loan.amount),
      payments: new FormControl(this.loan.payments),
      numRepayment:new FormControl(this.loan.numRepayment),
      date_start: new FormControl(this.datePipe.transform(this.loan.date_start, "yyyy-MM-dd")),
      month: new FormControl(this.loan.month),
    });
    if(this.loan.nameStatus=="active" || this.loan.nameStatus=="performed")
    {
      this.LoanForm.controls['amount'].disable();
      this.LoanForm.controls['date_start'].disable();
      this.LoanForm.controls['month'].disable();
      this.LoanForm.controls['numRepayment'].disable();
      // (<HTMLButtonElement>  this.angular.element("#deleteBTN")).disabled = true;
    }
  })
  ));


    this.LoanService.getFutureBalances().subscribe(x=>console.log(x));
  }
  disableFormControl()
  {
    return this.loan.nameStatus=="activ"?true:false;
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
    NewLoan.amount = this.LoanForm.get('amount').value;
    NewLoan.date_start = new Date(this.LoanForm.get('date_start').value);
    NewLoan.management_Status=this.LoanForm.get('Management_status').value;
    // NewLoan.guaantee_2 = this.LoanForm.get('guaantee_2').value;
    // NewLoan.guarantee_1 = this.LoanForm.get('guarantee_1').value;
    NewLoan.month = this.LoanForm.get('month').value;
    NewLoan.id_user = this.idUser;
    NewLoan.entryDate=this.loan.entryDate;
    NewLoan.score=0;
    NewLoan.numRepayment=this.LoanForm.get('payments').value
    // NewLoan.BeginningRepayment= this.LoanForm.get('month').value;
    NewLoan.nameStatus = this.LoanForm.get('loan_status').value;
    NewLoan.paid = false;
    NewLoan.numRepayment=this.loan.numRepayment;
    NewLoan.id_loan=this.loan.id_loan;
    NewLoan.userName=null;
    NewLoan.remark = this.LoanForm.get('remark').value;
    NewLoan.id_user=this.loan.id_user;
    console.log(NewLoan);
    this.LoanService.Edit(NewLoan).subscribe(
       {
         next: data => {
           debugger
           this.message.title = "נשמר בהצלחה";
           this.message.body = "הפרטים נשמרו בהצלחה לחזרה לרשימת ההלוואת לחץ אישור";
           this.message.href = "loan/list";
         },
         error: error =>{
           this.message.title = "יש תקלה בהוספה";
           this.message.body = "הפרטים לא נשמרו אנא פנה לתמיכה";
           this.message.href = `loan/detalis/${this.loan.id_loan}`;
         }
       }
     );
  }
  Delete()
  {
    debugger
    this.LoanService.Delete(this.loan.id_loan);
  }
}


