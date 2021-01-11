import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { InquireComponent } from './containers/inquire/inquire.component';
import { AppRoutingRoutingModule } from './app-routing-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientInfoComponent } from './containers/client-info/client-info.component';
import { FormComponent } from './components/form/form.component';
import { InquireSummaryComponent } from './containers/inquire-application-summary/inquire-application-summary.component';
import { CustomerDetailSummaryComponent } from './containers/customer-detail-summary/customer-detail-summary.component';
import { NgbModalModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './containers/login/login.component';
import { CreateLMPCComponent } from './containers/create-lmpc/create-lmpc.component';
import { ForgotpasswordComponent } from './containers/forgotpassword/forgotpassword.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { LmpcClientinfoComponent } from './containers/lmpc-clientinfo/lmpc-clientinfo.component';
import { HttpClientModule } from '@angular/common/http';
import { InquireMaintenanceComponent } from './containers/inquire/inquire-maintenance/inquire-maintenance.component';
import { SearchCriteriaFormGroupComponent } from './generic/search-criteria-form-group/search-criteria-form-group.component';
import { DynamicFormQuestionComponent } from './components/shared/dynamic-form-question.component';
import { PersonalInformationFormGroupComponent } from './generic/personal-information-form-group/personal-information-form-group.component';
import { InquireProcessApplicationComponent } from './containers/inquire/inquire-process-application/inquire-process-application.component';
import { ValidIdFormGroupComponent } from './generic/valid-id-form-group/valid-id-form-group.component';
import { FinancialInformationFormGroupComponent } from './generic/financial-information-form-group/financial-information-form-group.component';
import { WarningErrorComponent } from './components/shared/modals/warning-error/warning-error.component';
// import { ModalModule } from 'ngx-bootstrap';
import { ModalModule} from 'ngx-bootstrap/modal';
import { ConfirmatinModalComponent } from './components/shared/modals/confirmatin-modal/confirmatin-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InquireComponent,
    NavbarComponent,
    InquireSummaryComponent,
    ClientInfoComponent,
    FormComponent,
    CustomerDetailSummaryComponent,
    LoginComponent,
    CreateLMPCComponent,
    ForgotpasswordComponent,
    LmpcClientinfoComponent,
    SidebarComponent,
    InquireMaintenanceComponent,
    SearchCriteriaFormGroupComponent,
    DynamicFormQuestionComponent,
    PersonalInformationFormGroupComponent,
    InquireProcessApplicationComponent,
    ValidIdFormGroupComponent,
    FinancialInformationFormGroupComponent,
    WarningErrorComponent,
    ConfirmatinModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ WarningErrorComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
