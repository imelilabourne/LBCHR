import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { InquireComponent } from './containers/inquire/inquire.component';
import { AppRoutingRoutingModule } from './app-routing-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientInfoComponent } from './containers/client-info/client-info.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InquireSummaryComponent } from './containers/inquire-application-summary/inquire-application-summary.component';
import { CustomerDetailSummaryComponent } from './containers/customer-detail-summary/customer-detail-summary.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InquireComponent,
    NavbarComponent,
    InquireSummaryComponent,
    ClientInfoComponent,
    FormComponent,
    CustomerDetailSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
