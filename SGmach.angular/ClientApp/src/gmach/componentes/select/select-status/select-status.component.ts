// import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { status } from 'src/gmach/classes/status';
// import { StatusService } from 'src/gmach/services/status.service';

// @Component({
//   selector: 'app-select-status',
//   templateUrl: './select-status.component.html',
//   styleUrls: ['./select-status.component.scss']
// })
// export class SelectStatusComponent implements OnInit {
//  status;
// @Output()
// statusSelected:EventEmitter<status> = new EventEmitter<status>();

//   listStatus:status[]=[];
//   constructor(private statusService:StatusService) 
//   {
//    this.statusService.GetStatus().subscribe(s=>{
//     this.listStatus=<status[]>s;
//     });
//    }

//    Onselect()
//    {
//      this.statusSelected.emit(this.status)
//    }
//   ngOnInit(): void {
//   }

// }
