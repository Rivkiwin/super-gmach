import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FundServiceService } from 'src/app/services/fund-service.service';
import { FriendsService } from 'src/app/services/friends.service';
import { FundClass } from 'src/app/classes/fund-class';
import { Friend } from 'src/app/classes/friend';
@Component({
  selector: 'app-friend-of-fund',
  templateUrl: './friend-of-fund.component.html',
  styleUrls: ['./friend-of-fund.component.scss']
})
export class FriendOfFundComponent  {
  
  friends:Friend[];
  fund:FundClass;
 //get the fund of father
 @Input() set Fund(fund:FundClass){
   this.fund=fund;
   this.FUndService.GetFriendByFundId(this.fund.Id).subscribe(x=>{this.friends=<Friend[]>x,console.log});

 }
  constructor(private router:Router,private FUndService:FundServiceService,private friendService:FriendsService,private activeRouter:ActivatedRoute) {
  
   }

  
  getFundFriend()
  {
    this.FUndService.GetFriendByFundId(this.fund.Id).subscribe(x=>{this.friends=<Friend[]>x,console.log});

  }
}
