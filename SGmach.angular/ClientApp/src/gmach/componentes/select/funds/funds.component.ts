// import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// // import { FundServiceService } from 'src/gmach/services/fund-service.service';
// import { FundClass } from 'src/gmach/classes/fund-class';

// @Component({
//   selector: 'select-funds',
//   templateUrl: './funds.component.html',
//   styleUrls: ['./funds.component.scss']
// })
// export class FundsComponent implements OnInit {
//   selected
//   constructor(private FundService:FundServiceService) { }
//   funds:FundClass[]=[];
//   ngOnInit(): void {
//     debugger
//     // this.FundService.get_all().subscribe(f=>{
//     //   this.funds=<FundClass[]>f;
//     // });
//   }
//   @Output()
//   selectFund:EventEmitter<number> = new EventEmitter<number>();

//   Onselect()
//   {
//     console.log(this.selected)
//     this.selectFund.emit(this.selected);
//   }

// }
