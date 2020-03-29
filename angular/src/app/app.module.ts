import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import '@angular/compiler';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { FundFormComponent } from './fund-form/fund-form.component';
import { FundComponentComponent } from './fund-component/fund-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FundComponentComponent,
    FundFormComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
