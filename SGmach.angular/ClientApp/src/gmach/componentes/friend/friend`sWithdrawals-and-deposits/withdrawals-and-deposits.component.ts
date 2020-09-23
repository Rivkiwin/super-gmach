import { Component, OnInit, Input } from '@angular/core';
import { FundServiceService } from 'src/gmach/services/fund-service.service';
import { Deposit } from 'src/gmach/classes/Deposit';
import { DepositService } from 'src/gmach/services/deposit.service';
import { DatePipe } from '@angular/common';
import { WithdrawalsService } from 'src/gmach/services/withdrawals.service';
import { Withdrawals } from 'src/gmach/classes/withdrawals';

@Component({
  selector: 'Friendwswithdrawals-and-deposits',
  templateUrl: './withdrawals-and-deposits.component.html',
  styleUrls: ['./withdrawals-and-deposits.component.scss'],
  providers:[DatePipe]
})
export class WithdrawalsAndDepositsComponent implements OnInit {
  [x: string]: any;
  Search;
  gridApi;
  depositList:Deposit[]=[];
  Withdrawals:Withdrawals[]=[];
  rowData=[];
  constructor(private WithdralsS:WithdrawalsService,private FundService:FundServiceService,private depositService:DepositService,public datepipe: DatePipe) { 
    this.defaultColDef = { resizable: true };

  }
  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
    
  }
  @Input() friendId;
  ngOnInit(): void {
    this.depositService.GetByUserId(this.friendId)
    .subscribe(d=>{
      debugger
      this.depositList=<Deposit[]>d;
    });
    this.WithdralsS.GetByUser(this.friendId).subscribe(w=>{
      this.Withdrawals=<Withdrawals[]>w;
      this.addRowData();
    })
    
  }

  onGridReady(params) {
    var wrapper= <HTMLElement>document.getElementsByClassName("ag-root-wrapper")[0];
wrapper.style.width="100%";
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  columnDefs = [
    { headerName: 'סוג', field: 'type'},
    { headerName: 'תאריך', field: 'date' },
    { headerName: 'קרן', field: 'fund'},
    { headerName: 'סכום', field: 'amount'},
  ]

  addRowData()
  {

    this.rowData=this.depositList.map(d=>{return{
        date:this.datepipe.transform(d.date, 'dd-MM-yyyy'),
        fund:d.FundName,
        amount:d.amount,
        type:"הפקדה"
    }});
    debugger;
    this.Withdrawals.forEach(w=>{this.rowData.push(

      {
        date:this.datepipe.transform(w.Date, 'dd-MM-yyyy'),
        fund:w.Fund.Fund_name,
        amount:w.Amount,
        type:"משיכה"
      });
    });
  }
  onFilterTextBoxChanged() {
    this.gridApi.setQuickFilter(this.search);
  }
}
