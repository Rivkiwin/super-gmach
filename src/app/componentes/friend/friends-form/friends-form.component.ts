import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StatusFriendE, Friend } from 'src/app/classes/friend';
import { Router } from '@angular/router';
import { FriendsService } from 'src/app/services/friends.service';
import {validation, letterOnly,numberOnly,futureDay} from 'src/Validation'
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
 message;
 errorMessage;
 NumberinValid=true;
 LetterinValid=true;
 //key= Object.values;
 LetterOnly=letterOnly;
 NumberOnly=numberOnly;
 messageLetterinValid="!הכנס תוים ואותיות בלבד";
 messageNumberinValid="!הכנס ספרות בלבד";
 
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
     Direct_debit:new FormControl(),
     father_name:new FormControl()
    })
  }
  Add()
  {
    
    try{
    var  new_friend=<Friend>this.formFriend.value;
   this.message=JSON.stringify(this.FriendService.add(new_friend));
  
    }
    catch(error)
    {
      this.message=error;
      this.message.push("erro")
    }
    this.SuccessMessage=true;
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

//check validation
   validation= () =>{
    'use strict'
  
    window.addEventListener('add-user', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = this.formFriend;
  
      // Loop over them and prevent submission
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
    }, false)
  }
  
}
