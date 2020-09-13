import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {futureDay,numberOnly } from 'src/ts/Validation';
  import { from } from 'rxjs';
@Component({
  selector: 'addwithdrawal',
  templateUrl: './addwithdrawal.component.html',
  styleUrls: ['./addwithdrawal.component.css']
})
export class AddwithdrawalComponent implements OnInit {
  Fwithdrawal:FormGroup;
  fundId:Number=0;
  
  Wayw;
  setWayw(e)
  {
    this.Wayw=JSON.parse(e);
  }
  @Input() FreindId;
  constructor() { }
  futureDay=futureDay;
  ngOnInit(): void {
    this.Fwithdrawal=new FormGroup({
      Date:new FormControl(Date.now()),
      Fund:new FormControl(this.fundId),
      Amount:new FormControl(100),
      Status:new FormControl(2),
      WayW:new FormControl(this.Wayw),
    })
  }

}
