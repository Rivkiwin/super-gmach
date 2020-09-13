import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent implements OnInit {

  constructor() { }
  selected;
  paymentMethods;
  
  ngOnInit(): void {
    debugger;
    this.paymentMethods=[{name:'cash',value:'אשראי'},
    {name:'credit',value:'מזומן'},
    {name:'BankTransfer',value:'העברה בנקאית'},
    {name:'check',value:"צ'ק"}];
  }
  @Output()
  select:EventEmitter<{name:string,value:string}> = new EventEmitter<{name:string,value:string}>();

  Onselect()
  {
    console.log(this.selected)
    this.select.emit(this.selected);
  }

}
