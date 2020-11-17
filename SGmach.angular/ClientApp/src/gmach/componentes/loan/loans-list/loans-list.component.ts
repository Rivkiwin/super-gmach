import { Component, Input, OnInit } from '@angular/core';
import { LoanService } from 'src/gmach/services/loan.service';
import { Loan } from 'src/gmach/classes/Loan';
import { DatePipe } from '@angular/common';
import { ExportExcelService } from 'src/gmach/services/export-excel.service';
@Component({
  selector: 'loans-list',
  templateUrl: './loans-list.component.html',
  styleUrls: ['./loans-list.component.scss'],
  providers: [DatePipe]
})
export class LoansListComponent implements OnInit {
  loanList:Loan[];
  search;
  userId;
  @Input() UserID;
  rowData;
  status="all";
  statusMenger;
  columnDefs;
  dataFilter
  defaultColDef = {
    resizable: true,
    width:100,
    sortable: true,
  };
   
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
        statusMenger:loan.status.name,
        status:loan.nameStatus=="active"?"פעיל":loan.nameStatus=="future"?"עתידי":loan.nameStatus=="performed"?"הוחזר":"",
        paid:loan.paid?'v':'x',
        dateStart:this.datepipe.transform(loan.date_start, 'yyyy-MM-dd'),
        EntryDate:this.datepipe.transform(loan.entryDate, 'yyyy-MM-dd'),
      }
      
    });
    this.dataFilter=this.rowData.filter(data=>this.status=="all"?true:data.statusMenger?data.statusMenger==this.status:false);
  }
  ngOnInit(): void {
   this.loanService.GetAll().subscribe(
     x=>{this.loanList=<Loan[]>x;
      if (this.UserID!=null)
      {
        this.loanList=this.loanList.filter(loan=>
          loan.id_user==this.UserID)
      }
      console.log(x);
     this.AddData(); 
    }
   )
   this.columnDefs = [
    {
      headerName: 'קוד', field: 'numLoan', width:70,
      cellRenderer: function (params) {
        return `<a href="loan/detalis/${params.data.id}">` + params.data.id + '</a>'
      }
    },
    { headerName: 'סכום', field: 'amount'  },
    { headerName: 'ניקוד', field: 'scoreing' ,hide: this.UserID!=undefined},
    { headerName: 'שם הלווה', field: 'name',hide: this.UserID!=undefined},
    { headerName: 'מצב ', field: 'status' },
    { headerName: 'סטטוס', field: 'statusMenger'},
    { headerName: 'תאריך התחלה', field: 'dateStart',width:150},
    // { headerName:'פרעון ראשון', field: 'dateStartR' },
    { headerName:'הגשת הבקשה', field: 'EntryDate',hide: this.UserID!=undefined,width:150},

    ];
  }
  ExportExcel()
  {
    var exportData=this.loanList.map(loan => {
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

    this.ExcelService.exportExcel(exportData,"הלוואות")
  }
  onFilterTextBoxChanged() {
    this.dataFilter=this.rowData.filter(data=>this.status=="all"?true:data.statusMenger?data.statusMenger==this.status:false);
    this.gridApi.setQuickFilter(this.search);
  }


}
