import { Component, OnInit, Input } from '@angular/core';
import { FundServiceService } from 'src/gmach/services/fund-service.service';
import { Deposit } from 'src/gmach/classes/Deposit';
import { DepositService } from 'src/gmach/services/deposit.service';
import { DatePipe } from '@angular/common';
import { WithdrawalsService } from 'src/gmach/services/withdrawals.service';
import { Withdrawals } from 'src/gmach/classes/withdrawals';

@Component({
  selector: 'withdrawals-and-deposits',
  templateUrl: './withdrawals-and-deposits.component.html',
  styleUrls: ['./withdrawals-and-deposits.component.scss'],
  providers:[DatePipe]
})
export class WithdrawalsAndDepositsComponent implements OnInit {
  [x: string]: any;
  Search;
  columnDefs;
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
  @Input() fundId;
  ngOnInit(): void {
    this.columnDefs = [
      { headerName: 'סוג', field: 'type', width:120},
      { headerName: 'תאריך', field: 'date',width:128},
      { headerName: 'סטטוס', field: 'status'},
      { headerName: 'שם חבר', field: 'nameFriend', hide: this.friendId!=undefined},
      { headerName: 'קרן', field: 'fund' ,hide: this.fundId!=undefined},
      { headerName: 'סכום', field: 'amount', width:130},
    ]
    if(this.friendId!=undefined)
    {
      debugger
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
  else if(this.fundId!=undefined)
  {
    debugger
    this.depositService.GetByFundId(this.fundId)
    .subscribe(d=>{
      debugger
      console.log(d);
      this.depositList=<Deposit[]>d;
      this.addRowData();
    });
    debugger
    this.WithdralsS.GetByFund(this.fundId).subscribe(w=>{
      console.log(w);
      debugger;
      this.Withdrawals=<Withdrawals[]>w;
      console.log(w);
      this.addRowData();
    }) 
  }
    
  }

  onGridReady(params) {
    var wrapper= <HTMLElement>document.getElementsByClassName("ag-root-wrapper")[0];
    wrapper.style.width="100%";
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    //diving coluom % to the tabel 
    debugger
    params.api.sizeColumnsToFit();
    window.addEventListener('resize', function () {
      setTimeout(function () {
        params.api.sizeColumnsToFit();
      });
    });
  }

 
  addRowData()
  {

    this.rowData=this.depositList.map(d=>{debugger; return{
        date:this.datepipe.transform(d.date, 'dd-MM-yyyy'),
        fund:d.FundName,
        amount:d.amount,
        type:"הפקדה",
        nameFriend:d.user_name,
        status:d.type
    }});
    debugger;
    this.Withdrawals.forEach(w=>{this.rowData.push(

      {
        date:this.datepipe.transform(w.date, 'dd-MM-yyyy'),
        fund:w.fund,
        amount:w.amount,
        nameFriend:w.user_name,
        type:"משיכה",
        status:w.status
      });
    });
  }
  
  onFilterTextBoxChanged() {
    this.gridApi.setQuickFilter(this.search);
  }
}
