

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { FilterStatusPipe } from './pipes/filter-status.pipe';
import { CommonModule } from '@angular/common';  

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EditFundComponent } from './componentes/funds/edit-fund/edit-fund.component';
import { FriendsComponent } from './componentes/friend/friends/friends.component';
import { FriendsDetailsComponent } from './componentes/friend/friends-details/friends-details.component';
import { FriendsFormComponent } from './componentes/friend/friends-form/friends-form.component';
import { FriendsListComponent } from './componentes/friend/friends-list/friends-list.component';
import { ManagementComponent } from './componentes/management/management.component';
import { FilterMonthsPipe } from './pipes/filter-months.pipe';
import { DatePipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { ExpenditureComponent } from './componentes/petty-cash/expenditure/expenditure.component';
// import { ListExpenditureComponent } from './componentes/petty-cash/expenditure/list-expenditure/list-expenditure.component';
import { PettyCashComponent } from './componentes/petty-cash/petty-cash/petty-cash.component';
import { FundComponentComponent } from './componentes/funds/fund-component/fund-component.component';
import { FundFormComponent } from './componentes/funds/fund-form/fund-form.component';
import { FundListComponent } from './componentes/funds/fund-list/fund-list.component';
import { FundDetailsComponent } from './componentes/funds/fund-details/fund-details.component';
import { FriendOfFundComponent } from './componentes/funds/friend-of-fund/friend-of-fund.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { AddNewComponent } from './componentes/petty-cash/expenditure/add-new/add-new.component';
import { ExpenditureDetailsComponent } from './componentes/petty-cash/expenditure/expenditure-details/expenditure-details.component';
import { ListExpenditureComponent } from './componentes/petty-cash/expenditure/list-expenditure/list-expenditure.component';
import { AddNewIncomeComponent } from './componentes/petty-cash/income/add-new-income/add-new-income.component';
import { AddCreditComponent } from './componentes/add-credit/add-credit.component';
import { MessageBoxAddComponent } from './componentes/message-box-add/message-box-add.component';
import { SelectStatusComponent } from './componentes/select/select-status/select-status.component';
import { PaymentMethodComponent } from './componentes/select/payment-method/payment-method.component';
import { DepositsListComponent } from './componentes/deposits/deposits-list/deposits-list.component';
import { AddDepositComponent } from './componentes/deposits/add-deposit/add-deposit.component';
import { DepositDetailsComponent } from './componentes/deposits/deposit-details/deposit-details.component';
import { AlertsComponent } from './componentes/deposits/Deposits-alerts/alerts.component';
import { UserComponent } from './componentes/select/user/user.component';
import { LoginComponent } from './componentes/login/login.component';
import { FundsComponent } from './componentes/select/funds/funds.component';
import { FundDepositsWithdrawalsComponent } from './componentes/funds/fund-deposits-withdrawals/fund-deposits-withdrawals.component';
import { FriendDepositsWithdrawalsComponent } from './componentes/friend/friend-deposits-withdrawals/friend-deposits-withdrawals.component';
import { AddWithdrawalsComponent } from './componentes/Withdrawals/add-withdrawals/add-withdrawals.component';


// import { MatFormFieldModule, MatSelectModule } from '@angular/material';
// import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
  
  declarations: [

    AppComponent,
   
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
    
    ExpenditureDetailsComponent,
    
    AddNewIncomeComponent,
    
    AddCreditComponent,
    
    MessageBoxAddComponent,
    
    SelectStatusComponent,
    
    PaymentMethodComponent,
    
    DepositsListComponent,
    
    AddDepositComponent,
    
    DepositDetailsComponent,
    
    AlertsComponent,
    
    UserComponent,
    
    LoginComponent,
    
    FundsComponent,
    
    FundDepositsWithdrawalsComponent,
    
    FriendDepositsWithdrawalsComponent,
    
    AddWithdrawalsComponent,
    

    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    
    ReactiveFormsModule,
    FormsModule,
    AgGridModule.withComponents([]),
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    HttpModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    // MatSelectModule,
    // MatFormFieldModule,
    // NgxMatSelectSearchModule
  ],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ],
  providers: [
    DatePipe,],
  bootstrap: [AppComponent]
})
export class AppModule { }
