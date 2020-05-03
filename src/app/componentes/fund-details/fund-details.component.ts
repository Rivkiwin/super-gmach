import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FundClass, StatusE } from 'src/app/classes/fund-class';
import { FundServiceService } from 'src/app/services/fund-service.service';


@Component({
  selector: 'app-fund-details',
  templateUrl: './fund-details.component.html',
  styleUrls: ['./fund-details.component.scss']
})
export class FundDetailsComponent implements OnInit {
 public fund:FundClass;
 statusE=StatusE;
 key=Object.values;
  constructor(private router:Router,private FUndService:FundServiceService,private activeRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(res=>this.fund=this.FUndService.GETOne_ByName(String(res.get('name'))));
  }

}
