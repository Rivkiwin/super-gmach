import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StatusFriendE, Friend } from 'src/gmach/classes/friend';
import { Router } from '@angular/router';
import { FriendsService } from 'src/gmach/services/friends.service'
import { validation, letterOnly, numberOnly, futureDay } from 'src/ts/Validation'
import { FriendsComponent } from '../friends/friends.component';
import { Communication } from 'src/gmach/classes/communication';
import { BankDetails } from 'src/gmach/classes/Bank-detalis';
import { Credit } from 'src/gmach/classes/Credit';

@Component({
  selector: 'app-friends-form',
  templateUrl: './friends-form.component.html',
  styleUrls: ['./friends-form.component.scss']
})
export class FriendsFormComponent implements OnInit {
  public formFriend: FormGroup;
  public FCommunication_ways: FormGroup;
  new_friend:Friend=new Friend();
  Bank;
  credit;
  message = { title: '', body: '', href: '', buttonText: "הוסף ", click: "this.Add()" };
  userId:Number;
  statusFrind = StatusFriendE;
 SuccessMessage: boolean = false;
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
  setBankDetails(event) {
    this.Bank= <BankDetails> event;
  }
  setCreditDetails(event) {
    debugger
    this.credit = <Credit> event;
  }
  constructor(private Roter: Router, private FriendService: FriendsService) { }

  BadStatuse()
  {
    var status=this.formFriend.get("NameManagement_status").value;
    if(status=="Invalid" || status=="Unauthorized")
    {
      return true
    }
    else{
      return false
    }
  }
  ngOnInit(): void {
    this.formFriend = new FormGroup({
      Id_user: new FormControl(),
      First_name: new FormControl(),
      Last_name: new FormControl(),
      NameManagement_status: new FormControl("Proper"),
      VIP: new FormControl(false),
      validity: new FormControl(),
      Remarks: new FormControl(),
      collection_date: new FormControl(),
      father_name: new FormControl(),
      friend:new FormControl(true),
      MaritalStatus:new FormControl("נשוי"),
      Status_reason:new FormControl(),
      
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

  Add(event) {
    if(event.target.id!="Add-B")
    {
      return
    }
   
   validation()
       this.new_friend = <Friend>this.formFriend.value;
      this.userId=<Number>this.formFriend.get('Id_user').value;
      this.new_friend.id_user=this.userId;
      this.new_friend.father_name=this.formFriend.get('father_name').value;
      this.new_friend.joining_date=new Date();
      var Communication=<Communication>this.FCommunication_ways.value;
      debugger
      this.FriendService.add(this.new_friend,Communication,this.credit,this.Bank).subscribe(
        {
          next: data => {
            debugger
            this.message.title = "החבר נוסף בהצלחה";
            this.message.body = "הפרטים נשמרו בהצלחה לחזרה לרשימת החברים לחץ אישור";
            this.message.href = "friends/detalis/"+data;
          },
          error: error =>{
            this.message.title = "יש תקלה בהוספה";
            this.message.body = "הפרטים לא נשמרו אנא פנה לתמיכה";
            this.message.href = "#";
          }
        });

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
