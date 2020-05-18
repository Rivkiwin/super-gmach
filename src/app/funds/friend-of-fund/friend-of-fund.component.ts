import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FundServiceService } from 'src/app/services/fund-service.service';
import { FriendsService } from 'src/app/services/friends.service';
import { FundClass } from 'src/app/classes/fund-class';
import { FundDetailsComponent } from 'src/app/componentes/fund-details/fund-details.component';
import { Friend } from 'src/app/classes/friend';
@Component({
  selector: 'app-friend-of-fund',
  templateUrl: './friend-of-fund.component.html',
  styleUrls: ['./friend-of-fund.component.scss']
})
export class FriendOfFundComponent implements OnInit {
  
 
  constructor(private router:Router,private FUndService:FundServiceService,private friendService:FriendsService,private activeRouter:ActivatedRoute) { }

  ngOnInit(): void {
  }
  // getFundFriend():Friend[]
  // {
  //  // return this.friendService.GetAll().filter(x=> x.funds.filter(y=>y=this.fund.id));
    
  // }
}
