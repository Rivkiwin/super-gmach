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
import { FundListComponent } from './componentes/fund-list/fund-list.component';
import { FundDetailsComponent } from './componentes/fund-details/fund-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FundComponentComponent,
    FundFormComponent,
    FundListComponent,
    FundDetailsComponent,
    FilterStatusPipe,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
