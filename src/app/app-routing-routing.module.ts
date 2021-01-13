import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientInfoComponent } from './containers/client-info/client-info.component';
import { CustomerDetailSummaryComponent } from './containers/customer-detail-summary/customer-detail-summary.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { InquireSummaryComponent } from './containers/inquire-application-summary/inquire-application-summary.component';
import { InquireComponent } from './containers/inquire/inquire.component';
import { LoginComponent } from './containers/login/login.component';
import {ForgotpasswordComponent} from './containers/forgotpassword/forgotpassword.component';
import {CreateLMPCComponent} from './containers/create-lmpc/create-lmpc.component';
import {LmpcClientinfoComponent } from './containers/lmpc-clientinfo/lmpc-clientinfo.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forgotPassword', component: ForgotpasswordComponent},
  {path: 'corporateAcctInit', component: CreateLMPCComponent},
  {path: 'lmpcinfo', component: LmpcClientinfoComponent},
  {path: 'clientInfo', component: ClientInfoComponent},
  {path: 'inquire', component: InquireComponent},
  {path: 'inquire-summary', component: InquireSummaryComponent},
  {path: 'inquire-client', component: ClientInfoComponent},
  {path: 'inquire-summary-update', component: CustomerDetailSummaryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
