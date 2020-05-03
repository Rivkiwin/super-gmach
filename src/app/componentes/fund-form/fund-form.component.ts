import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { StatusE } from 'src/app/classes/fund-class';
import { FundServiceService } from 'src/app/services/fund-service.service';

@Component({
  selector: 'app-fund-form',
  templateUrl: './fund-form.component.html',
  styleUrls: ['./fund-form.component.scss']
})
export class FundFormComponent implements OnInit {
  public Form_new_fund:FormGroup;
  statusE=StatusE;
  key=Object.values;
  constructor(public fundServic:FundServiceService,public router:Router) { }

  ngOnInit(): void {
    this.Form_new_fund=new FormGroup({
      name:new FormControl(),
      Details:new FormControl(),
      month:new FormControl(),
      status:new FormControl(),
    })
   
}
 addFund():void
    {
      this.fundServic.add(this.Form_new_fund.value);
    }
}
