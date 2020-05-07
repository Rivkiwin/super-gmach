import { Component, OnInit } from '@angular/core';
import { FundClass } from 'src/app/classes/fund-class';
import { Router, ActivatedRoute } from '@angular/router';
import { FundServiceService } from 'src/app/services/fund-service.service';

@Component({
  selector: 'app-edit-fund',
  templateUrl: './edit-fund.component.html',
  styleUrls: ['./edit-fund.component.scss']
})
export class EditFundComponent implements OnInit {

  fund:FundClass;
  constructor(private router:Router,private FUndService:FundServiceService,private activeRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(res=>this.fund=this.FUndService.GETOne_ByName(String(res.get('name'))));
  }
}
