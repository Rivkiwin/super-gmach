import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FriendsService } from 'src/gmach/services/friends.service';
import { Friend, StatusFriendE } from 'src/gmach/classes/friend';
import { FormGroup, FormControl } from '@angular/forms';
import { letterOnly, numberOnly } from 'src/ts/Validation';
import { BankDetails } from 'src/gmach/classes/Bank-detalis';

@Component({
  selector: 'app-friends-details',
  templateUrl: './friends-details.component.html',
  styleUrls: ['./friends-details.component.scss']
})
export class FriendsDetailsComponent implements OnInit {
  friend:Friend;
  public formFriend: FormGroup;
  public FCommunication_ways: FormGroup;
  userId:Number;
  statusFrind = StatusFriendE;
  card_Detalis: boolean = false;
  bank_detalis: boolean = false;
  SuccessMessage: boolean = false;
  message;
  errorMessage;
  NumberinValid = true;
  LetterinValid = true;
  //key= Object.values;
  LetterOnly = letterOnly;
  NumberOnly = numberOnly;
  messageLetterinValid = "!הכנס תוים ואותיות בלבד";
  messageNumberinValid = "!הכנס ספרות בלבד";
  constructor(private activeRouter:ActivatedRoute,private friendsService:FriendsService) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(res=>(this.friendsService.GetById(res.get('id')).subscribe(
      f=>{this.friend=<Friend>f;
        console.log(this.friend);
        console.log(this.friend.First_name);
        this.formFriend = new FormGroup({
          Id_user: new FormControl(this.friend.Id_user),
          First_name: new FormControl(this.friend.First_name),
          Last_name: new FormControl(this.friend.Last_name),
          status: new FormControl(this.friend.Status_user),
          VIP: new FormControl(this.friend.Vip),
          Remarks: new FormControl(this.friend.Remarks),
          collection_date: new FormControl('09'),
          father_name: new FormControl(this.friend.Father_name)
        });
        this.FCommunication_ways = new FormGroup({
          Phon2: new FormControl(this.friend.Communication_ways.Phon2),
          Email_addres: new FormControl(this.friend.Communication_ways.Email_addres),
          City: new FormControl(this.friend.Communication_ways.City),
          Street: new FormControl(this.friend.Communication_ways.Street),
          Phon1: new FormControl(this.friend.Communication_ways.Phon1),
          Num_street: new FormControl(this.friend.Communication_ways.Num_street),
        })
      
      }
      )));
    }
      Add() {
    
        try {
          
          var new_friend = <Friend>this.formFriend.value;
          new_friend.Bank_Details=new BankDetails();
          this.userId=<Number>this.formFriend.get('Id_user').value;
          new_friend.Id_user=this.userId;
          // var Communication=<Communication>this.FCommunication_ways.value;
          // this.message = JSON.stringify(this.FriendService.add(new_friend,Communication));
    
        }
        catch (error) {
          // this.message = error;
          // this.message.push("erro")
        }
        this.SuccessMessage = true;
      }
  

}
