import { Component, OnInit } from '@angular/core';
import { LoanService } from 'src/gmach/services/loan.service';
import { Loan } from 'src/gmach/classes/Loan';
import { DatePipe } from '@angular/common';
import { ExportExcelService } from 'src/gmach/services/export-excel.service';
@Component({
  selector: 'app-loans-list',
  templateUrl: './loans-list.component.html',
  styleUrls: ['./loans-list.component.css'],
  providers: [DatePipe]
})
export class LoansListComponent implements OnInit {
  loanList:Loan[];
  search
  rowData;
  defaultColDef = {
    resizable: true,

    sortable: true,
  };
    columnDefs = [
    {
      headerName: 'קוד', field: 'numLoan', width:100,
      cellRenderer: function (params) {
        return `<a href="loan/detalis/${params.data.id}">` + params.data.id + '</a>'
      }
    },
    { headerName: 'סכום', field: 'amount'  },
    { headerName: 'ניקוד', field: 'scoreing' },
    { headerName: 'שם הלווה', field: 'name' },
    { headerName: 'סטטוס', field: 'status' },
    { headerName: 'שולם', field: 'paid' ,width:100},
    { headerName: 'תאריך התחלה', field: 'dateStart'},
    { headerName:'פרעון ראשון', field: 'dateStartR' },
    { headerName:'הגשת הבקשה', field: 'EntryDate'},

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
  constructor(private loanService:LoanService,public datepipe: DatePipe, private ExcelService:ExportExcelService) { }

  AddData()
  {
    this.rowData=this.loanList.map(loan => {
      return{
        id:loan.id_loan,
        amount:loan.amount,
        scoreing:loan.score,
        name:loan.userName,
        status:loan.status.name,
        paid:loan.paid?'v':'x',
        dateStart:this.datepipe.transform(loan.date_start, 'yyyy-MM-dd'),
        EntryDate:this.datepipe.transform(loan.entryDate, 'yyyy-MM-dd'),
      }
      
    });
  }
  ngOnInit(): void {
   this.loanService.GetAll().subscribe(
     x=>{this.loanList=<Loan[]>x;
      console.log(x);
     this.AddData(); 
    }
   )
  }
  ExportExcel()
  {
    var exportDta=this.loanList.map(loan => {
      return{
        קוד:loan.id_loan,
        סכום:loan.amount,
        ניקוד:loan.score,
        שם_לווה:loan.userName,
       סטטוס:loan.status.name,
        שולם:loan.paid?'v':'x',
        תאריך_התחלה:this.datepipe.transform(loan.date_start, 'yyyy-MM-dd'),
        תאריך_הגשת_בקשה:this.datepipe.transform(loan.entryDate, 'yyyy-MM-dd'),
      }
      
    });

    this.ExcelService.exportExcel(exportDta,"הלוואות")
  }
  onFilterTextBoxChanged() {
    this.gridApi.setQuickFilter(this.search);
  }


}
