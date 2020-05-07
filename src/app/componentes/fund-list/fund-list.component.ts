import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FundClass, StatusE } from 'src/app/classes/fund-class';
import { FundServiceService } from 'src/app/services/fund-service.service';




@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.component.html',
  styleUrls: ['./fund-list.component.scss','../../app.component.scss']
})
export class FundListComponent implements OnInit {
  public fund_list:FundClass[]=[];
  statusE=StatusE;
  name:string;
  key=Object.values;
  constructor(private fundServis:FundServiceService,public router:Router,private activeRouter:ActivatedRoute) {
    this.fund_list=this.fundServis.get_all();
   }
 

  ngOnInit(): void {
  }

}
