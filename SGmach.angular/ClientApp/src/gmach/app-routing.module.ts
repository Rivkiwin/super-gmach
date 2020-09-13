import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';;
import { FriendsComponent } from './componentes/friend/friends/friends.component';
import { FriendsFormComponent } from './componentes/friend/friends-form/friends-form.component';
import { FriendsListComponent } from './componentes/friend/friends-list/friends-list.component';
import { PettyCashComponent } from './componentes/petty-cash/petty-cash/petty-cash.component';
import { ExpenditureComponent } from './componentes/petty-cash/expenditure/expenditure.component';



import { ListExpenditureComponent } from './componentes/petty-cash/expenditure/list-expenditure/list-expenditure.component';

import { FundDetailsComponent } from './componentes/funds/fund-details/fund-details.component';
import { FundComponentComponent } from './componentes/funds/fund-component/fund-component.component';
import { FundFormComponent } from './componentes/funds/fund-form/fund-form.component';
import { FundListComponent } from './componentes/funds/fund-list/fund-list.component';
import { AddNewComponent } from './componentes/petty-cash/expenditure/add-new/add-new.component';
import { FriendsDetailsComponent } from './componentes/friend/friends-details/friends-details.component';
import { GmachHomeComponent } from "./gmach-home/gmach.home.component";
import { CommonModule } from "@angular/common";
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { GmachMenuComponent } from "./gmach-menu/gmach-menu.component";
import { GmachMngMenuComponent } from "./gmach-mng-menu/gmach-mng-menu.component";
import { AddLoadComponent } from './componentes/loan/addloan/addloan.component';
import { AddComponent } from './componentes/petty-cash/petty-cash/incomes/add/add.component';



const routes: Routes = [
  {
    path: "gmach",
    component: GmachMngMenuComponent, canActivate: [AuthorizeGuard],
    outlet: "gmachbar"
  },
  {
    path: "loan",
    children: [{
      path: "loanAdd",
      component: AddLoadComponent
    }]
  },
  {
    path: "FundDetails/:name",
    component: FundDetailsComponent
  },
  {
    path: "fund",
    component: FundComponentComponent,
    children: [{
      path: "addNewFund",
      component: FundFormComponent
    },
    {
      path: "FundList",
      component: FundListComponent
    },
    ]
  },

  {
    path: "patty_cash",
    component: PettyCashComponent,
    children: [{
      path: "Expenditure",
      component: ExpenditureComponent
    },
    {
      path: "add_new_Expenditure",
      component: AddNewComponent
    },
    {
      path: "view_Expenditure",
      component: ListExpenditureComponent
    },
    {
      path: "income",
      children: [{
        path: "add",
        component: AddComponent
      }]

    },
    ]
  },
  {
    path: "friends",
    component: FriendsComponent,
    children: [{
      path: "addNewFriend",
      component: FriendsFormComponent
    }
      , {
      path: "Friendlist",
      component: FriendsListComponent

    },
    {
      path: "detalis/:id",
      component: FriendsDetailsComponent
    }
    ]
  }
]


// {
//path: "LoadList",
// component: LoadListComponent

// }]
// ];




@NgModule({
  declarations: [GmachHomeComponent],
  imports: [RouterModule.forChild(routes), CommonModule,],
  exports: [RouterModule]
})
export class GmachAppRoutingModule { }
