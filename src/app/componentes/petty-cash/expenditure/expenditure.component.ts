import { Component, OnInit } from '@angular/core';
import { ExpenditureService } from 'src/app/services/expenditure.service';
import { Expenditure } from 'src/app/classes/expenditure';

@Component({
  selector: 'app-expenditure',
  templateUrl: './expenditure.component.html',
  styleUrls: ['./expenditure.component.scss']
})
export class ExpenditureComponent implements OnInit {
  
  columnDefs = [];
  rowData=[];
  constructor(private ExService:ExpenditureService) { }

  ngOnInit(): void {
    // this.ExService.Get().subscribe(x=>{
      this.columnDefs.push({ headerName: 'מזהה', field: 'id' },
      { headerName: 'סטטוס', field: 'status' },
      { headerName: 'מטרה', field: 'purpose' },
      { headerName: 'סכום', field: 'amount' },
      { headerName: 'מקבל', field: 'Receives' },
      { headerName: 'זמן עתידי', field: 'future_date' }) 

       
          
    //  });
      // )
  }

}
