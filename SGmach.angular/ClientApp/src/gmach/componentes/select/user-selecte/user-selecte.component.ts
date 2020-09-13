import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Friend } from 'src/gmach/classes/friend';
import { FriendsService } from 'src/gmach/services/friends.service';



@Component({
  selector: 'user-select',
  templateUrl: './user-selecte.component.html',
  styleUrls: ['./user-selecte.component.css']
})
export class UserSelecteComponent implements OnInit {
   Users:Friend[];
   userSelect;
  constructor(private friendService:FriendsService  ) { }
  @Output()   User:EventEmitter<Friend> = new EventEmitter<Friend>();
  
  ngOnInit(): void {
    this.friendService.get().subscribe(f=>{
      this.Users=<Friend[]>f;
    })
  }
  Onselect(){
  this.User.emit(this.userSelect);
  }
}
