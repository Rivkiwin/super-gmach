import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FundClass } from "src/gmach/classes/fund-class";
import { FundServiceService } from "src/gmach/services/fund-service.service";
import { FriendsService } from "src/gmach/services/friends.service";
import { UserInFund } from 'src/gmach/classes/user-in-fund';
import { DatePipe } from '@angular/common';
import { AddwithdrawalComponent } from '../../Withdrawal/addwithdrawal/addwithdrawal.component';
@Component({
  selector: 'friend-of-fund',
  templateUrl: './friend-of-fund.component.html',
  styleUrls: ['./friend-of-fund.component.scss'],
  providers: [DatePipe]
})
export class FriendOfFundComponent implements OnInit {
  usersList: UserInFund[];
  selectedRows
  gridApi;
  gridColumnApi;
  columnDefs;
  defaultColDef;
  Filter = "";
  rowSelection;
  rowData;
  numFriends;
  constructor(private FundService: FundServiceService, public datepipe: DatePipe, private friendservic: FriendsService) {

    this.defaultColDef = {
      flex: 1,
      width:100,
      minWidth: 100,
      resizable: true,
      // headerCheckboxSelection:"isFirstColumn",
      //  checkboxSelection: this.isFirstColumn,
    };
    this.columnDefs = [
      { headerName: 'תאריך הצטרפות', field: 'dateJoin' },
      { headerName: 'ת"ז', field: 'id' },
      { headerName: 'יתרה', field: 'balance' },
      { headerName: 'שם', field: 'name' },
      {
        headerName: '', field: 'withdrawal',
        cellRenderer: function (params) {
          return `<div><a href="Withdrawals/add/${params.data.fund}/${params.data.id}/${params.data.balance}" disabled="${params.data.balance}>0?true:felse">הוסף משיכה</a> /
          <a href="deposit/add/${params.data.fund}/${params.data.id}">הוסף הפקדה</a></div>`
          // [max]=${params.data.balance} > 
          // </addwithdrawal>`
        }
      }
    ];
  }
  fuundID
  @Input() set fundId(id) {
    debugger
    this.fuundID = id;
    this.FundService.GetFriends(this.fuundID).subscribe(u => {
      console.log(u);
      this.usersList = <UserInFund[]>u;
      this.numFriends=this.usersList.length;
      this.AddData();
    })
  };
  ngOnInit(): void {

  }

  AddData() {
    this.rowData = this.usersList.map(u => {
      return {
        balance: u.balance,
        name: u.first_name + " " + u.last_name,
        dateJoin: this.datepipe.transform(u.date_join, 'dd-MM-yyyy'),
        id: u.userID,
        fund: this.fuundID

      }
    })
  }
  onQuickFilterChanged() {
    this.gridApi.setQuickFilter(this.Filter);
  }
  onGridReady(params) {
    var wrappers = document.getElementsByClassName("ag-root-wrapper");
    var length = wrappers.length;
    for (var i = 0; i < length; i++) {
      var wrapper = <HTMLElement>wrappers[i];
      wrapper.style.width = "100%";
    }

    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    //diving coluom % to the tabel 
    params.api.sizeColumnsToFit();
    window.addEventListener('resize', function () {
      setTimeout(function () {
        params.api.sizeColumnsToFit();
      });
    });
  }


}

