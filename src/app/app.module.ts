import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { InquireComponent } from './containers/inquire/inquire.component';
import { AppRoutingRoutingModule } from './app-routing-routing.module';
<<<<<<< Updated upstream
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientInfoComponent } from './containers/client-info/client-info.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InquireSummaryComponent } from './containers/inquire-application-summary/inquire-application-summary.component';
import { CustomerDetailSummaryComponent } from './containers/customer-detail-summary/customer-detail-summary.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
=======
import { LoginComponent } from './containers/login/login.component';
import { CreateLMPCComponent } from './containers/create-lmpc/create-lmpc.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InquireComponent,
<<<<<<< Updated upstream
    NavbarComponent,
    InquireSummaryComponent,
    ClientInfoComponent,
    FormComponent,
    CustomerDetailSummaryComponent
=======
    LoginComponent,
    CreateLMPCComponent,
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingRoutingModule,
    FormsModule,
<<<<<<< Updated upstream
    ReactiveFormsModule,
    NgbModule.forRoot()
=======
    ReactiveFormsModule
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
