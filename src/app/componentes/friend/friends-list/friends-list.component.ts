import { Component, OnInit } from '@angular/core';
import { FriendsService } from 'src/app/services/friends.service';
import { ManagmentStatusService } from 'src/app/services/managment-status.service';
import { Friend } from 'src/app/classes/friend';
import { ManagementStatusDTO } from 'src/app/classes/management-status-dto';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss']
})
export class FriendsListComponent implements OnInit {
  rowData = [];
  Friends: Friend[];
  defaultColDef={  resizable: true,  tooltipComponent: 'customTooltip'};


 

  columnDefs = [
    { headerName: 'הלוואות', field: 'loan' },
    { headerName: 'קרן רחל לאה', field: 'fund_Rachel_Leah' },
    { headerName: 'הפקדות', field: 'depositing' },
    { headerName: 'טל', field: 'phon' },
    { headerName: 'שם', field: 'name' },
    { headerName: 'קוד', field: 'id' },
    { headerName: 'חבר', field: 'friend' },
    { headerName: 'ניהול', field: 'managment',
    valueGetter: function(params) {
      return params.data.managment.Name;
    },
    tooltip:function(params){
       return params.data.tooltip;
    },
    cellStyle: function(params) {
      // var color=this.managment.getByName(params.value).Color;
      return { backgroundColor:params.data.managment.Color};
    } },
 
  ];
 


  constructor(private friendsService: FriendsService, public managment: ManagmentStatusService) { }
  public seeUsers() { }
  public seemangment() {
    this.managment.GetAll();
  }

  public addrowData() {
    debugger
    this.Friends.forEach(friend => {
      //  console.log(friend.Last_name+" "+friend.First_name);
      this.rowData.push({ name: friend.Last_name + " " + friend.First_name },
        { friend: friend.Friend ? 'v' : 'x' }
      )
    })
  };

  ngOnInit(): void {
    this.friendsService.get().subscribe(x => {
      this.Friends = <Friend[]>x, this.Friends.forEach(friend => {
        debugger
       console.log( friend.Communication_ways.Phon1,),
        this.rowData.push({
          managment: friend.Management_status ,
          // tooltip:friend.Status_reason,
          friend: friend.Friend ? 'V' : 'X',
          id: friend.Id,
          name: friend.Last_name + " " + friend.First_name ,
          phon: friend.Communication_ways.Phon1
        })
      })
    });

    // this.Friends.forEach(friend => {
    //   console.log(Friend.Last_name+" "+Friend.First_name);
    //   this.rowData.push({name:friend.Last_name+" "+friend.First_name})
    // });
    // this.friendsService.get().subscribe(x=>{

    // })
    // this.columnDefs.push({headerName: 'שם', field: 'name'});
    // this.rowData.push({name:"e"});
    this.addrowData();

  }




}
