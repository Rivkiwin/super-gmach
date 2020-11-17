import { Component, OnInit } from '@angular/core';
import { Friend } from 'src/gmach/classes/friend';
import { FriendsService } from 'src/gmach/services/friends.service';
import { ManagmentStatusService } from 'src/gmach/services/managment-status.service';
import { AlertsFriends } from 'src/gmach/classes/alertsFriends';
import { ExportExcelService } from 'src/gmach/services/export-excel.service';


@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss']
})
export class FriendsListComponent implements OnInit {
  rowData = [];
  gridApi;
  search="";
  gridColumnApi;
  Friends: Friend[];
  defaultColDef = {
    resizable: true,

    sortable: true,
  };

  columnDefs = [
    { headerName: 'הלוואות', field: 'loan' },
    { headerName: 'קרן רחל לאה', field: 'fund_Rachel_Leah' },
    { headerName: 'טל', field: 'phon', },
    {
      headerName: 'שם', field: 'name',
      cellRenderer: function (params) {
        return `<a href="friends/detalis/${params.data.id}">` + params.data.name + '</a>'
      }
    },
    { headerName: 'תז', field: 'id' },
    {
      headerName: 'חבר', field: 'friend', width: 80,

    },
    {
      headerName: 'ניהול', field: 'managment',
      // tooltipValueGetter: (params) => params.data.tooltip,
      cellRenderer: function (params) {
        console.log(params.data.tooltip);
        return `<div data-toggle="tooltip"  title="${params.data.tooltip}">` + params.data.managment.name + '</div>'
      },
      cellStyle: function (params) {
        return { backgroundColor: params.data.managment.color };
      },
    },
  ];

  constructor(private friendsService: FriendsService, public managment: ManagmentStatusService,private ExcelService:ExportExcelService) { }
  public seeUsers() { }
  public seemangment() {
    this.managment.GetAll();
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
  public addrowData() {
    this.rowData = this.Friends.map(friend => {
      console.log(friend)
      return {
        friendO:friend,
        managment: friend.management_status,
        tooltip:friend.status_reason,
        friend: friend.friend ? 'V' : 'X',
        id: friend.id_user,
        name: `${friend.last_name} ${friend.first_name}`,
        phon: friend.communication_ways.phon1,
        fund_Rachel_Leah:friend.rachelLea,
        loan:friend.loans
      }
    });
  };
  alerts:AlertsFriends[];
  
  ngOnInit(): void {

    this.friendsService.get().subscribe(x => {
      this.Friends = <Friend[]>x["users"]; 
      this.alerts=<AlertsFriends[]>x["alertsUsers"];
     this.addrowData();
    });
  }
  ExportExcel()
  {
    this.ExcelService.exportExcel(this.rowData,"חברי הגמח")
  }
  onFilterTextBoxChanged() {
    this.gridApi.setQuickFilter(this.search);
  }

}
