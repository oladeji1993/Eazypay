import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { TransactionsComponent } from './transactions/transactions.component';
import { InvestmentComponent } from './investment/investment.component';
import { SavingsComponent } from './savings/savings.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LandingComponent,
    SideNavComponent,
    HeaderComponent,
    TransactionsComponent,
    InvestmentComponent,
    SavingsComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
