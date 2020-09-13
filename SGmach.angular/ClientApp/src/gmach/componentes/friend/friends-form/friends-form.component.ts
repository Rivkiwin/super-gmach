import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StatusFriendE, Friend } from 'src/gmach/classes/friend';
import { Router } from '@angular/router';
import { FriendsService } from 'src/gmach/services/friends.service'
import { validation, letterOnly, numberOnly, futureDay } from 'src/ts/Validation'
import { FriendsComponent } from '../friends/friends.component';
import { Communication } from 'src/gmach/classes/communication';
import { BankDetails } from 'src/gmach/classes/Bank-detalis';

@Component({
  selector: 'app-friends-form',
  templateUrl: './friends-form.component.html',
  styleUrls: ['./friends-form.component.scss']
})
export class FriendsFormComponent implements OnInit {
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

  public keyStatusFriend(): Array<string> {
    var keys = Object.keys(this.statusFrind);
    return keys.slice(keys.length / 2);
  }
  constructor(private Roter: Router, private FriendService: FriendsService) { }

  ngOnInit(): void {
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
      var Communication=<Communication>this.FCommunication_ways.value;
      this.message = JSON.stringify(this.FriendService.add(new_friend,Communication));

    }
    catch (error) {
      // this.message = error;
      // this.message.push("erro")
    }
    this.SuccessMessage = true;
  }
  Show(div: string): void {
    switch (div) {
      case "card_Detalis": this.card_Detalis = !this.card_Detalis; break
      case "bank_detalis": this.bank_detalis = !this.bank_detalis;

        break;

      default:
        break;
    }

  }

  //check validation
  validation = () => {
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
