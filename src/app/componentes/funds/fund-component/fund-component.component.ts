import { Component, OnInit } from '@angular/core';


import { Router, ActivatedRoute } from '@angular/router';
import { FundClass } from 'src/app/classes/fund-class';
import { FundServiceService } from 'src/app/services/fund-service.service';

// import * as $ from "jquery";

@Component({
  selector: 'app-fund-component',
  templateUrl: './fund-component.component.html',
  styleUrls: ['./fund-component.component.scss']
})
export class FundComponentComponent implements OnInit {
public fund_list:FundClass[]=[];
  constructor(private fundServis:FundServiceService,public router:Router,private activeRouter:ActivatedRoute) {
  this.fundServis.get_all().subscribe(f=>this.fund_list=<FundClass[]>f);
  
   }

  ngOnInit(): void {

  }

}
