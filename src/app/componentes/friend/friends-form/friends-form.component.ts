import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StatusFriendE } from 'src/app/classes/friend';
import { Router } from '@angular/router';
import { FriendsService } from 'src/app/services/friends.service';

import { FriendsComponent } from '../friends/friends.component';

@Component({
  selector: 'app-friends-form',
  templateUrl: './friends-form.component.html',
  styleUrls: ['./friends-form.component.scss']
})
export class FriendsFormComponent implements OnInit {
 public formFriend:FormGroup;
 statusFrind=StatusFriendE;
 card_Detalis:boolean=false;
 bank_detalis:boolean=false;
 SuccessMessage:boolean=false;
 //key= Object.values;
 public keyStatusFriend():Array<string>
 {
  var keys = Object.keys(this.statusFrind);
  return keys.slice(keys.length / 2);
 }
 constructor(private Roter:Router,private FriendService:FriendsService) { }

  ngOnInit(): void {
    this.formFriend=new FormGroup({
    ciling:new FormControl(),
     tz:new FormControl(),
     Fname:new FormControl(),
     Lname:new FormControl(),
     status:new FormControl(),
     city:new FormControl(),
     street:new FormControl(),
     phon1:new FormControl(),
     buildingNumber:new FormControl(),
     VIP:new FormControl(),
     card_number:new FormControl(),
     CVV:new FormControl(),
     validity:new FormControl(),
     credit:new FormControl(),
     Bank:new FormControl(),
     Accoun_number:new FormControl(),
     Branch:new FormControl(),
     phon2:new FormControl(),
     email:new FormControl(),
     Remarks:new FormControl(),
     collection_dateCard:new FormControl(),
     collection_date:new FormControl(),
     Direct_debit:new FormControl()
    })
  }
  Add():void
  {
    
    try{
    this.FriendService.add(this.formFriend.value);
    this.SuccessMessage=true;
    }
    catch(error)
    {
      
    }
  }
  Show(div:string):void{
    switch (div) {
      case "card_Detalis":this.card_Detalis=!this.card_Detalis;break
      case "bank_detalis":this.bank_detalis=!this.bank_detalis;
        
        break;
    
      default:
        break;
    }

  }
}
