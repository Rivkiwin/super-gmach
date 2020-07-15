import { Component, OnInit } from '@angular/core';
import { ExpenditureService } from 'src/app/services/expenditure.service';
import { Expenditure } from 'src/app/classes/expenditure';
@Component({
  selector: 'app-list-expenditure',
  templateUrl: './list-expenditure.component.html',
  styleUrls: ['./list-expenditure.component.scss']
})
export class ListExpenditureComponent implements OnInit {
  [x: string]: any;
  Expenditures: Expenditure[] = [];
  columnDefs = [{ headerName: 'מזהה', field: 'id' },
  { headerName: 'סטטוס', field: 'status' },
  { headerName: 'מטרה', field: 'purpose' },
  { headerName: 'סכום', field: 'amount' },
  { headerName: 'מקבל', field: 'Receives' },
  { headerName: 'זמן עתידי', field: 'future_date' },
  ]
  rowData = [];
  constructor(private ExService: ExpenditureService) { }


  addDATA() {

    this.Expenditures.forEach(ex =>
      this.rowData.push({
        id: ex.id, status: ex.status.Description, purpose: ex.purpose,
        amount: ex.amount, Receives: ex.Receives, future_date: ex.future_date
      }));
      this.grid.refresh()
  }
  ngOnInit(): void {
    this.ExService.Get().subscribe(x => {
      this.Expenditures = <Expenditure[]>x,
        console.log(x),
        this.addDATA();
    })
    debugger
    this.addDATA();
  }

}
