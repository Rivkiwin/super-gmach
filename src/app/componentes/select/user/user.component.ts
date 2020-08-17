import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Friend } from 'src/app/classes/friend';
import { FriendsService } from 'src/app/services/friends.service';

@Component({
  selector: 'user-select',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
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
