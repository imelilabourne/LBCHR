import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { InquireComponent } from './containers/inquire/inquire.component';
import { AppRoutingRoutingModule } from './app-routing-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InquireComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
