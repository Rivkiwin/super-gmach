import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundComponentComponent } from './componentes/fund-component/fund-component.component';
import { FundFormComponent } from './componentes/fund-form/fund-form.component';
import { FundListComponent } from './componentes/fund-list/fund-list.component';
import { FundDetailsComponent } from './componentes/fund-details/fund-details.component';
import { FriendsComponent } from './componentes/friend/friends/friends.component';
import { FriendsFormComponent } from './componentes/friend/friends-form/friends-form.component';
import { FriendsListComponent } from './componentes/friend/friends-list/friends-list.component';



const routes: Routes = [
  {
    path:"FundDetails/:name",
    component:FundDetailsComponent
   },
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
    ]
  },
  {
    path:"friends",
    component:FriendsComponent,
    children:[{
      path:"addNewFriend",
      component:FriendsFormComponent
    }
     ,{
       path:"addNewFriend",
       component:FriendsListComponent
     }
     ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
