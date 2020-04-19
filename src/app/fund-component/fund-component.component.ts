import { Component, OnInit } from '@angular/core';
import { FundClass } from '../fund-class';
import { FundServiceService } from '../fund-service.service';
import { Router, ActivatedRoute } from '@angular/router';
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
