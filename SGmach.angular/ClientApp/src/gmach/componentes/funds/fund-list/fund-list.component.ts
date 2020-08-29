import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

 import {FundClass, StatusE} from "src/gmach/classes/fund-class";
import {FundServiceService} from "src/gmach/services/fund-service.service";




@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.component.html',
  styleUrls: ['./fund-list.component.scss']
})
export class FundListComponent implements OnInit {
  public fund_list:FundClass[]=[];
  statusE=StatusE;
  name:string;
  status:string;
  key=Object.values;
  public keyStatusFund():Array<string>
  {
   var keys = Object.keys(this.statusE);
   return keys.slice(keys.length / 2);
  }
  constructor(private fundServis:FundServiceService,public router:Router,private activeRouter:ActivatedRoute) {
    this.fund_list=this.fundServis.get_all();
   }


  ngOnInit(): void {
  }

}
