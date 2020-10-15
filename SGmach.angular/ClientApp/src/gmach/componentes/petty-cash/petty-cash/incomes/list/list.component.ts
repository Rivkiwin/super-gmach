import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Income } from 'src/gmach/classes/Income';
import { IncomeService } from 'src/gmach/services/income.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers:[DatePipe]
})
export class ListComponent implements OnInit {
  [x: string]: any;
  rowSelection = 'multiple';
  search;
  incomes: Income[] = [];
  defaultColDef = {
    resizable: true,
    sortable: true,
    editable: true,
  };

    columnDefs= [{
      headerName: 'מזהה', field: 'id', maxWidth: "80", minWidth: "80", sortable: true,
      cellRenderer: function (params) {
        return `<a href='/patty_cash/details/${params.data.id}'> ${params.data.id}</a>`
      }
    },
    { headerName: 'תאריך', field: 'Date', width: 100, sortable: true},
    { headerName: 'סכום', field: 'amount',width: 100 },
    { headerName: 'הערות', field: 'remark', sortable: true },
    { headerName: 'משלם', field: 'from', sortable: true }
    ]
  
  rowData = [];
  i:Income=new Income;
  constructor(private IncomeService: IncomeService, 
    public datepipe: DatePipe
    ) { }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    //diving coluom % to the tabel 
    params.api.sizeColumnsToFit();
    window.addEventListener('resize', function () {
      setTimeout(function () {
        params.api.sizeColumnsToFit();
      });
    });

    params.api.sizeColumnsToFit();
  }


  addDATA() {

   
      this.rowData = this.incomes.map(income => {
        return {
          remark: income.remark,
           Date: this.datepipe.transform(income.Date, 'dd-MM-yyyy'),
           amount: income.Amount,
           from: income.From,
           id:income.Id
        }
      })
    // this.grid.refresh();
  }
  
 
  ngOnInit(): void {
    this.IncomeService.Get().subscribe(x => {
      this.incomes = <Income[]>x,
      console.log(x)
        this.addDATA();
    },
      _err => {
        console.log(console.error());
      }
    )
    debugger
    this.addDATA();
  }
  onFilterTextBoxChanged() {
    this.gridApi.setQuickFilter(this.search);
  }


}
