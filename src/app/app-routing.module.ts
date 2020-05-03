import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundComponentComponent } from './componentes/fund-component/fund-component.component';
import { FundFormComponent } from './componentes/fund-form/fund-form.component';
import { FundListComponent } from './componentes/fund-list/fund-list.component';
import { FundDetailsComponent } from './componentes/fund-details/fund-details.component';



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
   },
   {
    path:"FundDetails",
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
