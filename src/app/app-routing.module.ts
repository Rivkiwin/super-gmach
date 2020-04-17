import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundFormComponent } from './fund-form/fund-form.component';
import { FundComponentComponent } from './fund-component/fund-component.component';


const routes: Routes = [
  {
    path:"fund",
    component:FundComponentComponent,
    children:[{
      path:"addNewFund",
      component:FundFormComponent
    },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
