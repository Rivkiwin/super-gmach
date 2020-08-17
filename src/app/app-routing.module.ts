import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';;
import { FriendsComponent } from './componentes/friend/friends/friends.component';
import { FriendsFormComponent } from './componentes/friend/friends-form/friends-form.component';
import { FriendsListComponent } from './componentes/friend/friends-list/friends-list.component';
import { PettyCashComponent } from './componentes/petty-cash/petty-cash/petty-cash.component';
import { ExpenditureComponent } from './componentes/petty-cash/expenditure/expenditure.component';

import { FundDetailsComponent } from './componentes/funds/fund-details/fund-details.component';
import { FundComponentComponent } from './componentes/funds/fund-component/fund-component.component';
import { FundFormComponent } from './componentes/funds/fund-form/fund-form.component';
import { FundListComponent } from './componentes/funds/fund-list/fund-list.component';
import { AddNewComponent } from './componentes/petty-cash/expenditure/add-new/add-new.component';
// import { ListExpenditureComponent } from './componentes/petty-cash/Expenditure/list-expenditure/list-expenditure.component';
import { FriendsDetailsComponent } from './componentes/friend/friends-details/friends-details.component';
import { ExpenditureDetailsComponent } from './componentes/petty-cash/expenditure/expenditure-details/expenditure-details.component';
import { ListExpenditureComponent } from './componentes/petty-cash/expenditure/list-expenditure/list-expenditure.component';
import { DepositsListComponent } from './componentes/deposits/deposits-list/deposits-list.component';
import { DepositDetailsComponent } from './componentes/deposits/deposit-details/deposit-details.component';
import { AddDepositComponent } from './componentes/deposits/add-deposit/add-deposit.component';



const routes: Routes = [
  {
    path: "FundDetails/:id",
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
      component: ListExpenditureComponent,
      children: []
    },
    {
      path: "details/:id",
      component: ExpenditureDetailsComponent
    },
    {
      path:"deposit",
      children:[
        {
          path:"List",
          component:DepositsListComponent
        },
        {
          path:"details/:id",
          component:DepositDetailsComponent
        },
        {
          path:"add",
          component:AddDepositComponent
        }

      ]
    }
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
