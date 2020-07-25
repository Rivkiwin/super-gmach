import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FundServiceService } from 'src/app/services/fund-service.service';
import { FriendsService } from 'src/app/services/friends.service';
import { from } from 'rxjs';
import { StatusE, FundClass } from 'src/app/classes/fund-class';
import { FriendOfFundComponent } from '../friend-of-fund/friend-of-fund.component';


@Component({
  selector: 'app-fund-details',
  templateUrl: './fund-details.component.html',
  styleUrls: ['./fund-details.component.scss'],
  
})

export class FundDetailsComponent implements OnInit {
 statusE=StatusE;
  key=Object.values;
  public fund:FundClass;
  constructor(private router:Router,private FUndService:FundServiceService,private friendService:FriendsService,private activeRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(res=>(this.FUndService.GetByID(res.get('id'))).subscribe(f=>{this.fund=<FundClass>f}));
    // console.log( this.activeRouter.paramMap.subscribe(res=>this.FUndService.GetByID(res.get('id'))));
    
    // this.FUndService.GetByID(2).subscribe(x=>console.log(x));
  }
  // getFundFriend():Friend[]
  // {
  //   return this.friendService.GetAll().filter(x=> x.funds.filter(y=>y=FundDetailsComponent.fund.id));
    
  // }

}
