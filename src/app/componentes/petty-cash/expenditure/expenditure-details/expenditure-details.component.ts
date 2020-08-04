import { Component, OnInit, Input } from '@angular/core';
import { Expenditure } from 'src/app/classes/expenditure';
import { ActivatedRoute } from '@angular/router';
import { ExpenditureService } from 'src/app/services/expenditure.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common'
import { status } from 'src/app/classes/status';
import { StatusService } from 'src/app/services/status.service';
import { validation } from 'src/Validation';

@Component({
  selector: 'app-expenditure-details',
  templateUrl: './expenditure-details.component.html',
  styleUrls: ['./expenditure-details.component.scss']
})
export class ExpenditureDetailsComponent implements OnInit {
  Formedetails: FormGroup;
  expenditure: Expenditure;
  changeTOperformed = false;
  selectStatus: status;
  status: status[];
  se;
  constructor(private activeRouter: ActivatedRoute, private exService: ExpenditureService, public datepipe: DatePipe, private statusService: StatusService) { }

  OnStatusChange(e) {
    switch (e.target.value) {
      case "performed":
        {
          this.changeTOperformed = true
        }
    }

    // console.log((<status>e.target.value).Name);
  }
  changeStatus(event, status) {
    this.selectStatus = status;
  }
  ngOnInit(): void {

    //get expenditure by id from the url
    var id;
    this.activeRouter.paramMap.subscribe(res => (id = res.get('id')));
    this.exService.GetById(id).subscribe(ex => {
      this.expenditure = <Expenditure>ex;
        this.EnterDetails();
        this.selectStatus=this.expenditure.status;
      //set data to status list
      this.statusService.GetStatus().subscribe(s => {
        this.status = <status[]>s;
      });
      this.se = this.expenditure.status.Description;
    });

  }

  //check validation and save
  Save() {
    validation();
    if(this.Formedetails.valid)
    {
      this.Update();
    }
    else{
      console.log("תקן את הארכים המסומנים לפ ני השמירה")
    }
  }
  Update() {
    debugger
    this.expenditure.amount = this.Formedetails.get('amount').value;
    this.expenditure.Receives = this.Formedetails.get('Receives').value;
    this.expenditure.purpose = this.Formedetails.get('purpose').value;
    this.expenditure.status = this.selectStatus;
    debugger
    return this.exService.Update(this.expenditure);
  }


  private EnterDetails() {
    console.log(this.expenditure.future_date);

    this.Formedetails = new FormGroup({
      status: new FormControl(this.expenditure.status.Description),
      // datePay: new FormControl(this.expenditure.real_date),
      // futureDate: new FormControl(this.expenditure.future_date_String),
      amount: new FormControl({ value: this.expenditure.amount, disabled: this.Isperformed() }),
      Receives: new FormControl({ value: this.expenditure.Receives, disabled: this.Isperformed() }),
      purpose: new FormControl({ value: this.expenditure.purpose, disabled: this.Isperformed() })
    });
    let date;
    if (!this.Isperformed()) {
      date = this.datepipe.transform(this.expenditure.future_date, 'dd-MM-yyyy')
    }
    else {
      date = this.datepipe.transform(this.expenditure.real_date, 'dd-MM-yyyy')
    }
    debugger
    console.log(date);
    this.Formedetails.addControl('datePay', new FormControl({ value: date, disabled: this.Isperformed() }))
  }
  public Isperformed() {
    return this.expenditure.status.Name == "future" ? false : true
  }

  


}

