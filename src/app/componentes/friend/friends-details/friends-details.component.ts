import { Component, OnInit } from '@angular/core';
import { Friend } from 'src/app/classes/friend';
import { ActivatedRoute } from '@angular/router';
import { FriendsService } from 'src/app/services/friends.service';

@Component({
  selector: 'app-friends-details',
  templateUrl: './friends-details.component.html',
  styleUrls: ['./friends-details.component.scss']
})
export class FriendsDetailsComponent implements OnInit {

  constructor(private activeRouter:ActivatedRoute,private friendService:FriendsService) { }
 friend:Friend;
 id;
  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(res=>this.id=res.get('id'));
    this.friendService.GetById(this.id).subscribe(f=>{this.friend=<Friend>f});
  }

}
