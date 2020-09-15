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
        console.log(this.friend)
      }
      )));
        this.formFriend = new FormGroup({
          Id_user: new FormControl(),
          First_name: new FormControl(),
          Last_name: new FormControl(),
          status: new FormControl(),
          VIP: new FormControl(false),
          validity: new FormControl(),
          Remarks: new FormControl(),
          collection_date: new FormControl(),
          father_name: new FormControl()
        });
        this.FCommunication_ways = new FormGroup({
          Phon2: new FormControl(),
          Email_addres: new FormControl(),
          City: new FormControl(),
          Street: new FormControl(),
          Phon1: new FormControl(),
          Num_street: new FormControl(),
        })
      }
      Add() {
    
        try {
          var new_friend = <Friend>this.formFriend.value;
          new_friend.Bank_Details=new BankDetails();
          this.userId=<Number>this.formFriend.get(' Id_user').value;
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
