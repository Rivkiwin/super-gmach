

import {  GmachAppRoutingModule } from './app-routing.module';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

 import { HttpClientModule } from '@angular/common/http';

import { FilterStatusPipe } from './pipes/filter-status.pipe';
import { CommonModule } from "@angular/common";

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EditFundComponent } from './componentes/funds/edit-fund/edit-fund.component';
import { FriendsComponent } from './componentes/friend/friends/friends.component';
import { FriendsDetailsComponent } from './componentes/friend/friends-details/friends-details.component';
import { FriendsFormComponent } from './componentes/friend/friends-form/friends-form.component';
import { FriendsListComponent } from './componentes/friend/friends-list/friends-list.component';
import { ManagementComponent } from './componentes/management/management.component';
import { FilterMonthsPipe } from './pipes/filter-months.pipe';

import { ExpenditureComponent } from './componentes/petty-cash/expenditure/expenditure.component';
import { ListExpenditureComponent } from './componentes/petty-cash/expenditure/list-expenditure/list-expenditure.component';
import { PettyCashComponent } from './componentes/petty-cash/petty-cash/petty-cash.component';
import { FundComponentComponent } from './componentes/funds/fund-component/fund-component.component';
import { FundFormComponent } from './componentes/funds/fund-form/fund-form.component';
import { FundListComponent } from './componentes/funds/fund-list/fund-list.component';
import { FundDetailsComponent } from './componentes/funds/fund-details/fund-details.component';
import { FriendOfFundComponent } from './componentes/funds/friend-of-fund/friend-of-fund.component';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { AddNewComponent } from './componentes/petty-cash/expenditure/add-new/add-new.component';
 import {GmachMenuComponent} from "./gmach-menu/gmach-menu.component";
import {GmachMngMenuComponent} from "./gmach-mng-menu/gmach-mng-menu.component";
import { CreditDetailsComponent } from './componentes/credit-details/credit-details.component'

// import { MatFormFieldModule, MatSelectModule } from '@angular/material';
// import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({

  declarations: [

    FundComponentComponent,
    FundFormComponent,
    FundListComponent,
    FundDetailsComponent,
    FilterStatusPipe,
    EditFundComponent,
    FriendsComponent,
    FriendsDetailsComponent,
    FriendsFormComponent,
    FriendsListComponent,
    ManagementComponent,
    FilterMonthsPipe,
    FriendOfFundComponent,
    ExpenditureComponent,
    ListExpenditureComponent,
    AddNewComponent,
    PettyCashComponent,
    GmachMenuComponent,
    GmachMngMenuComponent,
    CreditDetailsComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    GmachAppRoutingModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    // MatSelectModule,
    // MatFormFieldModule,
    // NgxMatSelectSearchModule
  ],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ],

  exports: [FundComponentComponent,
    FundFormComponent,
    FundListComponent,
    FundDetailsComponent,
    FilterStatusPipe,
    EditFundComponent,
    FriendsComponent,
    FriendsDetailsComponent,
    FriendsFormComponent,
    FriendsListComponent,
    ManagementComponent,
    FilterMonthsPipe,
    FriendOfFundComponent,
    ExpenditureComponent,
    ListExpenditureComponent,
    AddNewComponent,
    PettyCashComponent,
    GmachMenuComponent,
    GmachMngMenuComponent]

})
export class GmachModule { }
