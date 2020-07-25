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
  defaultColDef = {
    resizable: true,
    sortable: true,
  };
  columnDefs = [{ headerName: 'מזהה', field: 'id',maxWidth:"80", minWidth:"80",
  cellRenderer: function(params) {
    return `<a href='patty_cash/details/${params.data.id}'> ${params.data.id}</a>`
}
 },
  { headerName: 'סטטוס', field: 'status' ,maxWidth:"90" ,minWidth:"90"},
  { headerName: 'מטרה', field: 'purpose' },
  { headerName: 'סכום', field: 'amount'},
  { headerName: 'מקבל', field: 'Receives' },
  { headerName: 'זמן עתידי', field: 'future_date'
  }  
  ]
  rowData = [];
  constructor(private ExService: ExpenditureService) { }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    
    //diving coluom % to the tabel 
    params.api.sizeColumnsToFit();
    window.addEventListener('resize', function() {
      setTimeout(function() {
        params.api.sizeColumnsToFit();
      });
    });

    params.api.sizeColumnsToFit();
  }

  
  addDATA() {

    this.Expenditures.forEach(ex =>
      this.rowData.push({
        id: ex.id, status: ex.status.Description, purpose: ex.purpose,
        amount: ex.amount, Receives: ex.Receives, future_date:ex.future_date_String?ex.future_date_String:"__________"
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
