

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
import { CreditDetailsComponent } from './componentes/credit-details/credit-details.component';
import { AddLoadComponent } from './componentes/loan/addloan/addloan.component';
import { DiagramComponent } from './componentes/diagram/diagram.component'
import { UserSelecteComponent } from './componentes/select/user-selecte/user-selecte.component';
import { ExpenditureAndIncomeChartsComponent } from './componentes/expenditure-and-income-charts/expenditure-and-income-charts.component';
import { ChartsModule } from 'ng2-charts';
import { AddComponent } from './componentes/petty-cash/petty-cash/incomes/add/add.component';
import { AddwithdrawalComponent } from './componentes/Withdrawal/addwithdrawal/addwithdrawal.component';
import { LoansListComponent } from './componentes/loan/loans-list/loans-list.component';
import { WithdrawalsAndDepositComponent } from './componentes/withdrawals-and-deposit/withdrawals-and-deposit.component';
import { MessageAddComponent } from './componentes/message-add/message-add.component';
import { WithdrawalsAndDepositsComponent } from './componentes/friend/friend`sWithdrawals-and-deposits/withdrawals-and-deposits.component';
import { PaymentMethodComponent } from './componentes/select/payment-method/payment-method.component';
import { AddFreindToFundComponent } from './componentes/funds/add-freind-to-fund/add-freind-to-fund.component';
import { ListComponent } from './componentes/petty-cash/petty-cash/incomes/list/list.component';
// import { PaymentMethodComponent } from './componentes/select/payment-method/payment-method.component';
// import { SelectStatusComponent } from './componentes/select/select-status/select-status.component';
// import { UserComponent } from './componentes/select/user/user.component';

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
    CreditDetailsComponent,
    AddLoadComponent,
    DiagramComponent,
    UserSelecteComponent,
    ExpenditureAndIncomeChartsComponent,
    AddComponent,
    AddwithdrawalComponent,
    LoansListComponent,
    WithdrawalsAndDepositComponent,
    MessageAddComponent,
    WithdrawalsAndDepositsComponent,
    PaymentMethodComponent,
    AddFreindToFundComponent,
    ListComponent
    // PaymentMethodComponent,
    // SelectStatusComponent,
    // UserComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule,
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
    DiagramComponent,
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
