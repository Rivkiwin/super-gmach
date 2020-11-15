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
      loan_status:new FormControl(this.loan.nameStatus),
      Management_status:new FormControl(this.loan.management_Status),
      amount: new FormControl({value:this.loan.amount,disabled:this.loan.nameStatus!="Unauthorized"}),
      payments: new FormControl(this.loan.payments),
      date_start: new FormControl({ value:this.datePipe.transform(this.loan.date_start, "yyyy-MM-dd"),disabled:this.loan.nameStatus!="Unauthorized"}),
      month: new FormControl({value:this.loan.month,disabled:this.loan.nameStatus!="Unauthorized"}),
    });
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
    NewLoan.amount = this.Load.get('amount').value;
    NewLoan.date_start = new Date(this.Load.get('date_start').value);
    NewLoan.management_Status=this.Load.get('Management_status').value;
    // NewLoan.guaantee_2 = this.Load.get('guaantee_2').value;
    // NewLoan.guarantee_1 = this.Load.get('guarantee_1').value;
    NewLoan.month = this.Load.get('month').value;
    NewLoan.id_user = this.idUser;
    NewLoan.entryDate=this.loan.entryDate;
    NewLoan.score=0;
    NewLoan.numRepayment=this.Load.get('payments').value
    // NewLoan.BeginningRepayment= this.Load.get('month').value;
    NewLoan.nameStatus = this.Load.get('loan_status').value;
    NewLoan.paid = false;
    NewLoan.numRepayment=this.loan.numRepayment;
    NewLoan.id_loan=this.loan.id_loan;
    NewLoan.userName=null;
    NewLoan.remark = this.Load.get('remark').value;
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



