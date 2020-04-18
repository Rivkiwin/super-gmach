import { Component, OnInit } from '@angular/core';
import { FundClass } from '../fund-class';
import { FundServiceService } from '../fund-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.component.html',
  styleUrls: ['./fund-list.component.scss','../app.component.scss']
})
export class FundListComponent implements OnInit {
  public fund_list:FundClass[]=[];
  constructor(private fundServis:FundServiceService,public router:Router,private activeRouter:ActivatedRoute) {
    this.fund_list=this.fundServis.get_all();
   }
 

  ngOnInit(): void {
  }

}
