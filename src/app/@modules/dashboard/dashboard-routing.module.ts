import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { InvestmentComponent } from './investment/investment.component';
import { SavingsComponent } from './savings/savings.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,

    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
      { path: 'overview', component: LandingComponent },
      { path: 'transaction', component: TransactionsComponent },
      { path: 'investment', component: InvestmentComponent },
      { path: 'savings', component: SavingsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
