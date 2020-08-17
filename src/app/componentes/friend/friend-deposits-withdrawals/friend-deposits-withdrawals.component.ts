import { Component, OnInit, Input } from '@angular/core';
import { Deposit } from 'src/app/classes/Deposit';
import { FundServiceService } from 'src/app/services/fund-service.service';
import { DepositService } from 'src/app/services/deposit.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'friend-deposits-withdrawals',
  templateUrl: './friend-deposits-withdrawals.component.html',
  styleUrls: ['./friend-deposits-withdrawals.component.scss']
})
export class FriendDepositsWithdrawalsComponent implements OnInit {
  [x: string]: any;
  Search;
  gridApi;
  depositList:Deposit[]=[];
  rowData=[];
  constructor(private FundService:FundServiceService,private depositService:DepositService,public datepipe: DatePipe) { }
  @Input() friendId;
  ngOnInit(): void {
    this.depositService.GetByUserId(this.friendId)
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
    { headerName: 'קרן', field: 'fund'},
    { headerName: 'סכום', field: 'amount'}
  ]

  addRowData()
  {
    debugger
    this.rowData=this.depositList.map(d=>{return{
        date:this.datepipe.transform(d.date, 'dd-MM-yyyy'),
        fund:d.FundName,
        amount:d.amount
    }})
  }

}

