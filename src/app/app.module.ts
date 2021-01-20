import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { ModalModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { applicationReducer } from 'src/store/reducers/application.reducer';
import { ApplicationEffects } from '../store/effects/application.effects';
import { AppRoutingRoutingModule } from './app-routing-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DynamicFormQuestionComponent } from './components/shared/dynamic-form-question.component';
import { ConfirmatinModalComponent } from './components/shared/modals/confirmatin-modal/confirmatin-modal.component';
import { WarningErrorComponent } from './components/shared/modals/warning-error/warning-error.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ClientInfoComponent } from './containers/client-info/client-info.component';
import { CreateLMPCComponent } from './containers/create-lmpc/create-lmpc.component';
import { CustomerDetailSummaryComponent } from './containers/customer-detail-summary/customer-detail-summary.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './containers/forgotpassword/forgotpassword.component';
import { InquireSummaryComponent } from './containers/inquire-application-summary/inquire-application-summary.component';
import { InquireMaintenanceComponent } from './containers/inquire/inquire-maintenance/inquire-maintenance.component';
import { InquireProcessApplicationComponent } from './containers/inquire/inquire-process-application/inquire-process-application.component';
import { InquireComponent } from './containers/inquire/inquire.component';
import { LmpcClientinfoComponent } from './containers/lmpc-clientinfo/lmpc-clientinfo.component';
import { LoginComponent } from './containers/login/login.component';
import { FinancialInformationFormGroupComponent } from './generic/financial-information-form-group/financial-information-form-group.component';
import { PersonalInformationFormGroupComponent } from './generic/personal-information-form-group/personal-information-form-group.component';
import { SearchCriteriaFormGroupComponent } from './generic/search-criteria-form-group/search-criteria-form-group.component';
import { ValidIdFormGroupComponent } from './generic/valid-id-form-group/valid-id-form-group.component';
import { simpleReducer } from './simple.reducer';

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
    HttpClientModule,
    StoreModule.forRoot({message : simpleReducer,
    applications: applicationReducer
    }),
    EffectsModule.forRoot([ApplicationEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ WarningErrorComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
