import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FriendsService } from 'src/gmach/services/friends.service';
import { Friend, StatusFriendE } from 'src/gmach/classes/friend';
import { Communication } from 'src/gmach/classes/communication';
import { FormGroup, FormControl } from '@angular/forms';
import { letterOnly, numberOnly, validation } from 'src/ts/Validation';
import { BankDetails } from 'src/gmach/classes/Bank-detalis';
import { from } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-friends-details',
  templateUrl: './friends-details.component.html',
  styleUrls: ['./friends-details.component.scss'],
  providers: [DatePipe]
})
export class FriendsDetailsComponent implements OnInit {
  friend: Friend;
  public formFriend: FormGroup;
  public FCommunication_ways: FormGroup;
  userId: Number;
  statusFrind = StatusFriendE;
  card_Detalis: boolean = false;
  bank_detalis: boolean = false;
  SuccessMessage: boolean = false;
  message = { title: '', body: '', href: '', buttonText: "שמור שינויים ", click: "this.Edite()" };;
  errorMessage;
  NumberinValid = true;
  LetterinValid = true;
  last_Debit_order;
  Debit_order_Amount;
  //key= Object.values;
  LetterOnly = letterOnly;
  NumberOnly = numberOnly;
  messageLetterinValid = "!הכנס תוים ואותיות בלבד";
  messageNumberinValid = "!הכנס ספרות בלבד";
  constructor(private activeRouter: ActivatedRoute, private friendsService: FriendsService, private DatePipe: DatePipe) { }
  BadStatuse() {
    var status = this.formFriend.get("NameManagement_status").value;
    if (status == "Invalid" || status == "Unauthorized") {
      return true
    }
    else {
      return false
    }
  }
  FindDebit_order_Amount() {
    var today = new Date();
    var last_Debit_order = new Date(this.friend.last_Debit_order);
    var month = ((today.getFullYear() - last_Debit_order.getFullYear()) * 12) + today.getMonth() - last_Debit_order.getMonth();
    this.Debit_order_Amount = month * 50;
  }
  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(res => (this.friendsService.GetById(res.get('id')).subscribe(
      f => {
        debugger
        this.friend = <Friend>f;
        this.last_Debit_order = this.DatePipe.transform(this.friend.last_Debit_order, 'dd/MM/yyyy');
        // this.friend.payThisMonth=this.friend.payThisMonth.trim('@',"+ '</br>'+");
        console.log(this.friend);
        console.log(this.friend.first_name);
        debugger;
        this.formFriend = new FormGroup({
          Id_user: new FormControl({ value: this.friend.id_user, disabled: true }),
          First_name: new FormControl(this.friend.first_name),
          Last_name: new FormControl(this.friend.last_name),
          NameManagement_status: new FormControl(this.friend.management_status.id),
          VIP: new FormControl(this.friend.vip),
          Remarks: new FormControl(this.friend.remarks),
          collection_date: new FormControl('09'),
          father_name: new FormControl(this.friend.father_name),
          friend: new FormControl(this.friend.friend),
          MaritalStatus: new FormControl(this.friend.maritalStatus),
          Status_reason: new FormControl(this.friend.status_reason),
        });
        this.FCommunication_ways = new FormGroup({
          Phon2: new FormControl(this.friend.communication_ways.phon2),
          Email_addres: new FormControl(this.friend.communication_ways.email_addres),
          City: new FormControl(this.friend.communication_ways.city),
          Street: new FormControl(this.friend.communication_ways.street),
          Phon1: new FormControl(this.friend.communication_ways.phon1),
          Num_street: new FormControl(this.friend.communication_ways.num_street),
        });
        this.FindDebit_order_Amount();
      }
    )));
    // var wrapper= <HTMLElement>document.getElementsByClassName("ag-root-wrapper")[1];
    // wrapper.style.width="90%";
    debugger

    // console.log
  }
  Edite(event) {
    if (event.target.id != "Add-B") {
      return
    }
    if (!validation()) {
      return
    }
    var new_friend = <Friend>this.formFriend.value;
    debugger
    // new_friend.bank_Details = new BankDetails();
    // this.userId = <Number>this.formFriend.get('Id_user').value;
    debugger
    new_friend.id_user = this.friend.id_user;
    var Communication = <Communication>this.FCommunication_ways.value;
    new_friend.communication_ways = Communication;
    // this.message = JSON.stringify(this.FriendService.add(new_friend,Communication));

    this.friendsService.Edite(new_friend).subscribe(
      {
        next: data => {
          debugger
          this.message.title = "החבר נוסף בהצלחה";
          this.message.body = "הפרטים נשמרו בהצלחה לחזרה לרשימת החברים לחץ אישור";
          this.message.href = "friends/detalis/" + data;
        },
        error: error => {
          this.message.title = "יש תקלה בהוספה";
          this.message.body = "הפרטים לא נשמרו אנא פנה לתמיכה";
          this.message.href = "#";
        }
      });
  }

  collectDebit_order()
  {
    return this.friendsService.collectDebit_order(this.friend.id_user,this.Debit_order_Amount).subscribe(
      {
        next:data=>{
          alert("נוסף בהצלחה");
          window.location.reload();
        },
        error:error=>{
          alert(error)
        }
           
        
      }
    );
  }
}



