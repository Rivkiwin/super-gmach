import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FundClass, StatusE } from 'src/app/classes/fund-class';
import { FundServiceService } from 'src/app/services/fund-service.service';
import { Friend } from 'src/app/classes/friend';
import { FriendsService } from 'src/app/services/friends.service';


@Component({
  selector: 'app-fund-details',
  templateUrl: './fund-details.component.html',
  styleUrls: ['./fund-details.component.scss']
})
export class FundDetailsComponent implements OnInit {
 statusE=StatusE;
  key=Object.values;
  static funds: FundClass;
  public fundp:FundClass;
  constructor(private router:Router,private FUndService:FundServiceService,private friendService:FriendsService,private activeRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(res=>this.fundp=this.FUndService.GETOne_ByName(String(res.get('name'))));
    FundDetailsComponent.funds=this.fundp;
  }
  // getFundFriend():Friend[]
  // {
  //   return this.friendService.GetAll().filter(x=> x.funds.filter(y=>y=FundDetailsComponent.fund.id));
    
  // }

}
