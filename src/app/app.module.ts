import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import '@angular/compiler';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { FundFormComponent } from './fund-form/fund-form.component';
import { FundComponentComponent } from './fund-component/fund-component.component';
import { FundListComponent } from './fund-list/fund-list.component';
import { FundDetailsComponent } from './fund-details/fund-details.component';
// import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FundComponentComponent,
    FundFormComponent,
    FundListComponent,
    FundDetailsComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
