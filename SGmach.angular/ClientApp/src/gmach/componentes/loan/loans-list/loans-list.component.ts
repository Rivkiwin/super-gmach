import { Component, OnInit } from '@angular/core';
import { LoanService } from 'src/gmach/services/loan.service';
import { Loan } from 'src/gmach/classes/Loan';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-loans-list',
  templateUrl: './loans-list.component.html',
  styleUrls: ['./loans-list.component.css'],
  providers: [DatePipe]
})
export class LoansListComponent implements OnInit {
  loanList:Loan[];
  rowData;
    columnDefs = [
    {
      headerName: 'מספר הלוואה', field: 'numLoan',
      cellRenderer: function (params) {
        return `<a href="loan/detalis/${params.data.id}">` + params.data.id + '</a>'
      }
    },
    { headerName: 'סכום', field: 'amount' },
    { headerName: 'ניקוד', field: 'scoreing' },
    { headerName: 'שם הלווה', field: 'name' },
    { headerName: 'סטטוס', field: 'status'},
    { headerName: 'שולם', field: 'paid'},
    { headerName: 'תאריך התחלה', field: 'dateStart'},
    { headerName: 'תאריך פרעון ראשון', field: 'dateStartR' },
    { headerName: 'תאריך הגשת הבקשה', field: 'EntryDate'},

    ]
  gridApi: any;
  gridColumnApi: any;
    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
      //diving coluom % to the tabel 
      params.api.sizeColumnsToFit();
      window.addEventListener('resize', function () {
        setTimeout(function () {
          params.api.sizeColumnsToFit();
        });
      });
  
      params.api.sizeColumnsToFit();
    }
  constructor(private loanService:LoanService,public datepipe: DatePipe) { }

  AddData()
  {
    this.rowData=this.loanList.map(loan => {
      return{
        numLoan:loan.id_load,
        amount:loan.amount,
        scoreing:loan.score,
        name:loan.UserName,
        status:loan.loan_status,
        paid:loan.paid?'v':'x',
        dateStart:this.datepipe.transform(loan.BeginningRepayment, 'yyyy-MM-dd'),
        EntryDate:this.datepipe.transform(loan.EntryDate, 'yyyy-MM-dd'),
      }
      
    });
  }
  ngOnInit(): void {
   this.loanService.GetAll().subscribe(
     x=>{this.loanList=<Loan[]>x;
     this.AddData(); 
    }
   )
  }

}
