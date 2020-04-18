import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundFormComponent } from './fund-form/fund-form.component';
import { FundComponentComponent } from './fund-component/fund-component.component';
import { FundListComponent } from './fund-list/fund-list.component';
import { FundDetailsComponent } from './fund-details/fund-details.component';


const routes: Routes = [
  {
    path:"fund",
    component:FundComponentComponent,
    children:[{
      path:"addNewFund",
      component:FundFormComponent
    },
    {
      path:"FundList",
      component:FundListComponent
    },
   {
    path:"FundDetails/:name",
    component:FundDetailsComponent
   }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
