import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FundServiceService } from '../fund-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fund-form',
  templateUrl: './fund-form.component.html',
  styleUrls: ['./fund-form.component.scss']
})
export class FundFormComponent implements OnInit {
  public Form_new_fund:FormGroup;
  constructor(public fundServic:FundServiceService,public router:Router) { }

  ngOnInit(): void {
    this.Form_new_fund=new FormGroup({
      name:new FormControl()
    })

  }
 addFund():void
    {
      this.fundServic.add(this.Form_new_fund.value);
    }
}
