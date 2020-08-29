import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 import {FundClass} from "src/gmach/classes/fund-class";
import {FundServiceService} from "src/gmach/services/fund-service.service";
import {FriendsService} from "src/gmach/services/friends.service";
 @Component({
  selector: 'app-friend-of-fund',
  templateUrl: './friend-of-fund.component.html',
  styleUrls: ['./friend-of-fund.component.scss']
})
export class FriendOfFundComponent implements OnInit {

  @Input() fund:FundClass;
  constructor(private router:Router,private FUndService:FundServiceService,private friendService:FriendsService,private activeRouter:ActivatedRoute) { }

  ngOnInit(): void {
  }
  // getFundFriend():Friend[]
  // {
  //   // return this.friendService.GetAll().filter(x=> x.funds.includes(this.fund.id));

  // }
}
