import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import '@angular/compiler';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import 'popper.js';
import 'bootstrap';
import { httpFactory } from '@angular/http/src/http_module';
import { FilterStatusPipe } from './pipes/filter-status.pipe';
import { FundComponentComponent } from './componentes/fund-component/fund-component.component';
import { FundFormComponent } from './componentes/fund-form/fund-form.component';

import { FundDetailsComponent } from './componentes/fund-details/fund-details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EditFundComponent } from './componentes/edit-fund/edit-fund.component';
import { FriendsComponent } from './componentes/friend/friends/friends.component';
import { FriendsDetailsComponent } from './componentes/friend/friends-details/friends-details.component';
import { FriendsFormComponent } from './componentes/friend/friends-form/friends-form.component';
import { FriendsListComponent } from './componentes/friend/friends-list/friends-list.component';
import { ManagementComponent } from './management/management.component';
import { FilterMonthsPipe } from './pipes/filter-months.pipe';
import { FriendOfFundComponent } from './funds/friend-of-fund/friend-of-fund.component';
import { FundListComponent } from './funds/fund-list/fund-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

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
    

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {FriendOfFundComponent }
