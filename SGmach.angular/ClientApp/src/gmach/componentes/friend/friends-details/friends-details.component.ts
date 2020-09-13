import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FriendsService } from 'src/gmach/services/friends.service';
import { Friend } from 'src/gmach/classes/friend';

@Component({
  selector: 'app-friends-details',
  templateUrl: './friends-details.component.html',
  styleUrls: ['./friends-details.component.scss']
})
export class FriendsDetailsComponent implements OnInit {
  friend:Friend;
  constructor(private activeRouter:ActivatedRoute,private friendsService:FriendsService) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(res=>(this.friendsService.GetById(res.get('id')).subscribe(
      f=>this.friend=<Friend>f)));
  }

}
