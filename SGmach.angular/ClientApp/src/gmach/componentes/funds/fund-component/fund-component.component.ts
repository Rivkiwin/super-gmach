import { Component, OnInit } from '@angular/core';


import { Router, ActivatedRoute } from '@angular/router';
import {FundClass} from "src/gmach/classes/fund-class";
import {FundServiceService} from "src/gmach/services/fund-service.service";

// import * as $ from "jquery";

@Component({
  selector: 'app-fund-component',
  templateUrl: './fund-component.component.html',
  styleUrls: ['./fund-component.component.scss']
})
export class FundComponentComponent implements OnInit {
public fund_list:FundClass[]=[];
  constructor(private fundServis:FundServiceService,public router:Router,private activeRouter:ActivatedRoute) {
    this.fund_list=this.fundServis.get_all();
  //   $("a").click(function(){$(this).addClass("active")})
   }

  ngOnInit(): void {

  }

}
