import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  {path:'accounts', component:AccountListComponent},
  {path:'create-account',component:CreateAccountComponent},
  {path:'deposit/:id',component:DepositComponent},
  {path:'withdraw/:id',component:WithdrawComponent},
  {path:'delete/:id',component:DeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
