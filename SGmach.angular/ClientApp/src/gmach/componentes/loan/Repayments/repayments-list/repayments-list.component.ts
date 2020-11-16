import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Repayment } from 'src/gmach/classes/repayment';
import { ExportExcelService } from 'src/gmach/services/export-excel.service';
import { LoanService } from 'src/gmach/services/loan.service';

@Component({
  selector: 'repayments-list',
  templateUrl: './repayments-list.component.html',
  styleUrls: ['./repayments-list.component.css'],
  providers:[DatePipe]
})
export class RepaymentsListComponent implements OnInit {

  @Input() loanId;
  Repayments:Repayment[];
  search;
  status="all";
  dataFilter;
  rowData;
  defaultColDef = {
    resizable: true,

    sortable: true,
  };
    columnDefs = [
    {
      headerName: 'קוד', field: 'numLoan', width:100,
      cellRenderer: function (params) {
        return `<a href="loan/repayment/${params.data.id}">` + params.data.id + '</a>'
      }
    },
    { headerName: 'סכום', field: 'amount'  },
    { headerName: 'תאריך', field: 'date' },
    { headerName: 'שם הלווה', field: 'name' },
    { headerName: 'סטטוס', field: 'status' },
    { headerName: 'מספר הלוואה', field: 'loan' }
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
    if(this.loanId!=null)
    {
      this.Repayments=this.Repayments.filter(repayment=>repayment.loanID==this.loanId)
      console.log(this.loanId);
    }
    this.rowData=this.Repayments.map(Repayment => {
      return{
        id:Repayment.id,
        amount:Repayment.amount,
        loan:Repayment.loanID,
        name:Repayment.userName,
        status:Repayment.status=="future"?"עתידי":Repayment.status=="performed"?"שולם":"",
        date:this.datepipe.transform(Repayment.date, 'yyyy-MM-dd'),
      }
    });
    this.dataFilter=this.rowData.filter(data=>this.status=="all"?true:data.status?data.status==this.status:false);
  }
  @Output() loanRepaymens:Repayment[];
  ngOnInit(): void {
    if(this.loanRepaymens==null)
    {
   this.loanService.GetRepayments().subscribe(
     x=>{this.Repayments=<Repayment[]>x;
      console.log(x);
     this.AddData(); 
    }
   )}
   else{
     this.Repayments=this.loanRepaymens;
     this.AddData(); 
   }
  }
  ExportExcel()
  {
    var exportDta=this.Repayments.map(repayment => {
      return{
        קוד:repayment.id,
        סכום:repayment.amount,
        הלוואה:repayment.loanID,
        שם_לווה:repayment.userName,
      //  סטטוס:repayment.status.name,
        תאריך:this.datepipe.transform(repayment.date, 'yyyy-MM-dd'),
      }
      
    });

    this.ExcelService.exportExcel(exportDta,"פרעונות")
  }
  onFilterTextBoxChanged() {
    this.dataFilter=this.rowData.filter(data=>this.status=="all"?true:data.status?data.status==this.status:false);
    this.gridApi.setQuickFilter(this.search);
  }


}
