import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Expenditure } from 'src/gmach/classes/expenditure';
import { Payment_FormE } from 'src/gmach/classes/expense';
import { ExpenditureService } from 'src/gmach/services/expenditure.service';
import { StatusService } from 'src/gmach/services/status.service';
import { numberOnly } from 'src/ts/Validation';

@Component({
  selector: 'app-expenditure',
  templateUrl: './expenditure.component.html',
  styleUrls: ['./expenditure.component.scss'],
  providers: [DatePipe]
})
export class ExpenditureComponent implements OnInit {
  myDate = new Date();
  date = new Date();
  expenditure: Expenditure;
  message = { title: '', body: '', href: '', buttonText: "שמור", click: "this.Add()" };
  public FormAddExpense: FormGroup;
  public EPayment_FormE = Payment_FormE;
  public Contemporary_expenditure: boolean = false;
  public keyPayment_Form(): Array<string> {
    var keys = Object.keys(this.EPayment_FormE);
    return keys.slice(keys.length / 2);
    numberOnly
  }
  constructor(private datePipe: DatePipe, private ExpenditureService: ExpenditureService, private acttiveRoute: ActivatedRoute,
    public router: Router, private statusServic: StatusService) {
    this.date = new Date();
    
  }
  Add(event) {
    if (event.target.id != "Add-B") {
      return
    }
    debugger
    this.expenditure.date = this.myDate;
    this.expenditure.receives = this.FormAddExpense.get('Receives').value;
    this.expenditure.amount = this.FormAddExpense.get('Expense_amount').value;
    this.expenditure.purpose = this.FormAddExpense.get('Purpose').value;
    this.expenditure.nameStatus = this.FormAddExpense.get('status').value ? "performed" : "future";
    
    //debugger
    this.ExpenditureService.Edite(this.expenditure).subscribe(
      {
        next: data => {
          debugger
          this.message.title = "ההוצאה נוספה בהצלחה";
          this.message.body = "הפרטים נשמרו בהצלחה לחזרה לרשימת ההוצאות לחץ אישור";
          this.message.href = "patty_cash/Expnditure/view_Expenditure";
        },
        error: error => {
          this.message.title = "יש תקלה בהוספה";
          this.message.body = "הפרטים לא נשמרו אנא פנה לתמיכה";
          this.message.href = "patty_cash/Expnditure/view_Expenditure";
        }
      }
    );;
  }
  public Show() {

    this.Contemporary_expenditure = !this.Contemporary_expenditure;
  }



  ngOnInit(): void {
    // var myDate = this.datePipe.transform(this.myDate, 'dd-MM-yyyy');
    this.Contemporary_expenditure = true;
    var Today = new Date();
    this.acttiveRoute.paramMap.subscribe(res=>this.ExpenditureService.GetById(res.get('id')).subscribe(d=>
      {this.expenditure=<Expenditure>d;
     console.log(this.datePipe.transform(this.expenditure.date, 'YYYY-MM-DD'));
    this.FormAddExpense = new FormGroup(
      {
        date:new FormControl({value:this.datePipe.transform(this.expenditure.date, 'yyyy-MM-dd'),disabled:this.expenditure.nameStatus=="performed"}),
        status: new FormControl({value:this.expenditure.nameStatus=="performed"?true:false,disabled:this.expenditure.nameStatus=="performed"}),
        Expense_amount: new FormControl({value:this.expenditure.amount,disabled:this.expenditure.nameStatus=="performed"}),
        Purpose: new FormControl({value:this.expenditure.purpose,disabled:this.expenditure.nameStatus=="performed"}),
        file: new FormControl(),
        PaymentForm: new FormControl({value:this.expenditure.way_of_payment,disabled:this.expenditure.nameStatus=="performed"}),
        Contemporary: new FormControl(),
        Receives: new FormControl({value:this.expenditure.receives,disabled:this.expenditure.nameStatus=="performed"})
      });}));
    debugger
    // this.FormAddExpense.controls['date'].setValue(myDate);
    //this.FormAddExpense.controls['date']

  }

}

