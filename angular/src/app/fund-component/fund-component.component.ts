import { Component, OnInit } from '@angular/core';
import { FundClass } from '../fund-class';
import { FundServiceService } from '../fund-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fund-component',
  templateUrl: './fund-component.component.html',
  styleUrls: ['./fund-component.component.scss']
})
export class FundComponentComponent implements OnInit {
fund_list:FundClass[]=[];
  constructor(private fundServis:FundServiceService,private router:Router,private activeRouter:ActivatedRoute) {
    this.fund_list=this.fundServis.get_all();
   }

  ngOnInit(): void {
  }

}
