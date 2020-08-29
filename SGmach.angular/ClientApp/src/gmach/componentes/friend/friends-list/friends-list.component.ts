import { Component, OnInit } from '@angular/core';
 import { ManagmentStatusService } from 'src/gmach/services/managment-status.service';
 import { FriendsService } from 'src/gmach/services/friends.service';
import {Friend} from "src/gmach/classes/friend";

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss']
})
export class FriendsListComponent implements OnInit {
  rowData = [];
  gridApi;
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
    { headerName: 'שם', field: 'name',
    cellRenderer: function(params) {
      return `<a href="friends/detalis/${params.data.id}">`+ params.data.name+'</a>'
  }
},
    { headerName: 'קוד', field: 'id', width: 80 },
    {
      headerName: 'חבר', field: 'friend', width: 80,

    },
    {
      headerName: 'ניהול', field: 'managment',
      tooltipValueGetter: (params) => params.data.tooltip,
      valueGetter: function (params) {
        return params.data.managment.Name;
      },
      cellStyle: function (params) {
        return { backgroundColor: params.data.managment.Color };
      },
    },
  ];

  constructor(private friendsService: FriendsService, public managment: ManagmentStatusService) { }
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
  public addrowData() {
    debugger
    this.Friends.forEach(friend => {
      //  console.log(friend.Last_name+" "+friend.First_name);
      this.rowData.push(
        { friend: friend.Friend ? 'v' : 'x' }
      )
    })
  };
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
    this.friendsService.get().subscribe(x => {
      this.Friends = <Friend[]>x, this.Friends.forEach(friend => {
        console.log(friend.Communication_ways.Phon1,),
          this.rowData.push({
            managment: friend.Management_status,
            tooltip: "friend.Status_reason",
            friend: friend.Friend ? 'V' : 'X',
            id: friend.Id,
            name: `${friend.Last_name } ${friend.First_name}`,
            phon: friend.Communication_ways.Phon1
          })
      })
    })

    this.addrowData();
  }


}
