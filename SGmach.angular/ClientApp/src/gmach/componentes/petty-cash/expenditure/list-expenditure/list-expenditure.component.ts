import { Component, OnInit } from '@angular/core';
import { ExpenditureService } from 'src/gmach/services/expenditure.service';
import { Expenditure } from 'src/gmach/classes/expenditure';
import { DatePipe } from '@angular/common';
import { ExportExcelService } from 'src/gmach/services/export-excel.service';
@Component({
  selector: 'app-list-expenditure',
  templateUrl: './list-expenditure.component.html',
  styleUrls: ['./list-expenditure.component.scss']
})
export class ListExpenditureComponent implements OnInit {
  [x: string]: any;
  rowSelection = 'multiple';
  search;
  Expenditures: Expenditure[] = [];
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
    { headerName: 'סטטוס', field: 'status', maxWidth: "90", minWidth: "90", sortable: true},
    { headerName: 'מטרה', field: 'purpose', sortable: true },
    { headerName: 'סכום', field: 'amount' },
    { headerName: 'מקבל', field: 'Receives', sortable: true },
    { headerName: 'תאריך ביצוע', field: 'future_date', sortable: true }
    ]
  
  rowData = [];
  constructor(private ExService: ExpenditureService,private exportService: ExportExcelService 
    // public datepipe: DatePipe
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

   
      this.rowData = this.Expenditures.map(ex => {
        return {
          id: ex.id, 
          // status: ex.status.Description,
           purpose: ex.purpose,
          amount: ex.amount, Receives: ex.Receives,
          future_date: ex.real_date?ex.real_date:ex.future_date
        }
      })
    // this.grid.refresh();
  }
  // GetDate(ex: Expenditure) {
  //   switch (ex.status.Name) {
  //     // case "future": return this.datepipe.transform(ex.future_date, 'dd-MM-yyyy');
  //     // case "performed": return this.datepipe.transform(ex.real_date, 'dd-MM-yyyy');
  //   }
  //   return "00/00/00";
  // }
  ngOnInit(): void {
    this.ExService.Get().subscribe(x => {
      this.Expenditures = <Expenditure[]>x,
        console.log(x),
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
  exportExcel()
  {
    this.exportService.exportExcel(this.rowData, 'expenditure');
  }
}
