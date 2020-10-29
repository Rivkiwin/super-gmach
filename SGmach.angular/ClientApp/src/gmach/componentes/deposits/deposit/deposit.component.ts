import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Deposit } from 'src/gmach/classes/Deposit';
import { DepositService } from 'src/gmach/services/deposit.service';


@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css'],
  providers :[DatePipe]
})
export class DepositComponent implements OnInit {
  [x: string]: any;
  search;
  Deposits:Deposit[]=[];
  defaultColDef = {
    resizable: true,
    sortable: true,
    editable: true,
  };
  columnDefs= [{
    headerName: 'מזהה', field: 'id', maxWidth: "80", minWidth: "80", sortable: true,
    cellRenderer: function (params) {
      return `<a href='/patty_cash/deposit/details/${params.data.id}'> ${params.data.id}</a>`
    }},
    { headerName: 'תאריך הפקדה', field: 'date',sortable: true},
    { headerName: 'שם המפקיד', field: 'user',sortable: true},
    { headerName: 'סכום', field: 'amount',sortable: true},
    { headerName: 'סוג', field: 'type',sortable: true },
    { headerName: 'קרן', field: 'fund',sortable: true }
    ]
    rowData = [];
    constructor(private DepsitService: DepositService, public datepipe: DatePipe) { }
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

  ngOnInit(): void {
    this.DepsitService.GetList().subscribe(Deposit=>{
      this.Deposits=<Deposit[]>Deposit;
      this.AddData();
    } );
    
  }
  AddData()
  {
  this.rowData= this.Deposits.map(deposit=>{
      return{
        id:deposit.Id,
        date:this.datepipe.transform(deposit.date, 'dd-MM-yyyy'),
        user:deposit.user_name,
        amount:deposit.amount,
        type:deposit.Payment_method,
        fund:deposit.FundName
      }
    })
  }
  //filter
  onFilterTextBoxChanged() {
    this.gridApi.setQuickFilter(this.search);
  }
}
