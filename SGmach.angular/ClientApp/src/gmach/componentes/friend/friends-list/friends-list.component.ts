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
      tooltipValueGetter: (params) => params.data.tooltip,
      valueGetter: function (params) {
        // return params.data.managment.name;
      },
      cellStyle: function (params) {
        // return { backgroundColor: params.data.managment.Color };
      },
    },
  ];

  constructor(private friendsService: FriendsService, public managment: ManagmentStatusService,private ExcelService:ExportExcelService) { }
  public seeUsers() { }
  public seemangment() {
    this.managment.GetAll();
  }

  formatToolTip(params: any) {
    // USE THIS FOR TOOLTIP LINE BREAKS
    const status_reason = params.status_reason;
    const lineBreak = true;
    // const toolTipArray = [first, last]
    return { status_reason }
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
      return {
        managment: friend.management_status,
        tooltip: "friend.Status_reason",
        friend: friend.friend ? 'V' : 'X',
        id: friend.id_user,
        name: `${friend.last_name} ${friend.first_name}`,
        phon: friend.communication_ways.phon1,
        fund_Rachel_Leah:friend.rachelLea,
        loan:- friend.loans
      }
    });
  };
  alerts:AlertsFriends[];
  
  ngOnInit(): void {

    this.friendsService.get().subscribe(x => {
      this.Friends = <Friend[]>x; 
     this.addrowData();
    });
    // this.friendsService.Alerts().subscribe(a=>{
    //   this.alerts=<AlertsFriends[]>a;
    //   console.log(a);
    // })
  }
  ExportExcel()
  {
    this.ExcelService.exportExcel(this.rowData,"friends")
  }
  onFilterTextBoxChanged() {
    this.gridApi.setQuickFilter(this.search);
  }

}
