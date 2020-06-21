import { Component, OnInit } from '@angular/core';
import { FriendsService } from 'src/app/services/friends.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss']
})
export class FriendsListComponent implements OnInit {

  constructor(private se:FriendsService) { }
 public seeUser()
  {
    this.se.get();
  }
  ngOnInit(): void {
  }

}
