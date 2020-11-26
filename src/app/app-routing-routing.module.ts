import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientInfoComponent } from './containers/client-info/client-info.component';
import { CustomerDetailSummaryComponent } from './containers/customer-detail-summary/customer-detail-summary.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
<<<<<<< Updated upstream
import { InquireSummaryComponent } from './containers/inquire-application-summary/inquire-application-summary.component';
import { InquireComponent } from './containers/inquire/inquire.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'inquire', component: InquireComponent},
  {path: 'inquire-summary', component: InquireSummaryComponent},
  {path: 'inquire-client', component: ClientInfoComponent},
  {path: 'customer-summary', component: CustomerDetailSummaryComponent},
=======
import { LoginComponent } from './containers/login/login.component';
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: DashboardComponent}
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
