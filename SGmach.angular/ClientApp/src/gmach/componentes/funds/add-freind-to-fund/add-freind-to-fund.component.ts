import { Component, OnInit, Input } from '@angular/core';
import { Friend } from 'src/gmach/classes/friend';
import { FundServiceService } from 'src/gmach/services/fund-service.service';
import { DatePipe } from '@angular/common';

// import { MenuModule } from '@ag-grid-enterprise/menu';
// import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';

@Component({
  selector: 'add-freind-to-fund',
  templateUrl: './add-freind-to-fund.component.html',
  styleUrls: ['./add-freind-to-fund.component.css'],
  providers:[DatePipe]
})
export class AddFreindToFundComponent implements OnInit {
  usersList: Friend[];
  selectedRows
  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private defaultColDef;
  Filter = "";
  private rowSelection;
  private rowData;
  constructor(private FundService: FundServiceService,public datepipe: DatePipe) {
    
    this.defaultColDef = {
      flex: 1,
      minWidth: 100,
      resizable: true,
      // headerCheckboxSelection:"isFirstColumn",
    //  checkboxSelection: this.isFirstColumn,
    };
    this.rowSelection = 'multiple';
    this.columnDefs = [
      { headerName: 'תאריך הצטרפות', field: 'dateJoin' },
      { headerName: 'חבר', field: 'friend' },
      { headerName: 'טלפון', field: 'phone' },
      { headerName: 'שם האב', field: 'father' },
      { headerName: 'ניהול', field: 'Management' },
      { headerName: 'שם', field: 'name', checkboxSelection: true }
    ];
  }
  fuundID
  @Input()  set fundId(id){
    debugger
     this.fuundID=id;
    this.FundService.GetUsersToAdd(this.fuundID).subscribe(u => {
      this.usersList = <Friend[]>u;
      debugger
      this.AddData();
    })
  };
  ngOnInit(): void {
    
  }
 
  AddData() {
    this.rowData = this.usersList.map(u => {
      console.log(u);
      return {
        Management:u.management_status.name,
        name:u.first_name+" "+u.last_name,
        father:u.father_name,
        dateJoin:this.datepipe.transform(u.joining_date, 'dd-MM-yyyy'),
        phone:u.communication_ways.phon1,
        friend:u.friend?'v':'x',
        id:u.id
      }
    })
  }
  onQuickFilterChanged() {
    this.gridApi.setQuickFilter(this.Filter);
  }
  onGridReady(params) {
    var wrapper= <HTMLElement>document.getElementsByClassName("ag-root-wrapper")[0];
wrapper.style.width="100%";
var sapnNoRow= <HTMLElement>document.getElementsByClassName("ag-overlay-no-rows-center")[0];
// sapnNoRow.innerHTML="אין חברים העונים לדרישות הקרן";
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    //diving coluom % to the tabel 
    params.api.sizeColumnsToFit();
    window.addEventListener('resize', function () {
      setTimeout(function () {
        params.api.sizeColumnsToFit();
      });
    });
  }
  add()
  {
    //getSelectedRowData() {
      let selectedNodes = this.gridApi.getSelectedNodes();
      let selectedData = selectedNodes.map(node => node.data.id);
      debugger
      this.FundService.AddFriends(selectedData,this.fuundID).subscribe(e=>console.error(e));
      this.FundService.GetUsersToAdd(this.fuundID).subscribe(u => {
        this.usersList = <Friend[]>u;
        debugger
        this.AddData();
        window.location.reload();
    })
  }

  }


