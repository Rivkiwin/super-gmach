import { Component, OnInit, Input } from '@angular/core';
import { FundServiceService } from 'src/app/services/fund-service.service';
import { DepositService } from 'src/app/services/deposit.service';
import { Deposit } from 'src/app/classes/Deposit';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'fund-deposits-withdrawals',
  templateUrl: './fund-deposits-withdrawals.component.html',
  styleUrls: ['./fund-deposits-withdrawals.component.scss']
})
export class FundDepositsWithdrawalsComponent implements OnInit {
  [x: string]: any;
  Search;
  gridApi;
  depositList:Deposit[]=[];
  rowData=[];
  constructor(private FundService:FundServiceService,private depositService:DepositService,public datepipe: DatePipe) { }
  @Input() fundId;
  ngOnInit(): void {
    this.depositService.GetByFundId(this.fundId)
    .subscribe(d=>{
      debugger
      this.depositList=<Deposit[]>d;
      this.addRowData();
    });
  }
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
  columnDefs = [
    { headerName: 'תאריך', field: 'date' },
    { headerName: 'סוג', field: 'type' },
    { headerName: 'שם חבר', field: 'user' },
    { headerName: 'סכום', field: 'amount'}
  ]

  addRowData()
  {
    debugger
    this.rowData=this.depositList.map(d=>{return{
        date:this.datepipe.transform(d.date, 'dd-MM-yyyy'),
        type:"הפקדה",
        user:d.user_name,
        amount:d.amount
    }})
  }

}
