import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'angular-highcharts';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WlcComponent } from './wlc/wlc.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BaseComponent } from './base/base.component';
import { HomeComponent } from './home/home.component';
import { StatsComponent } from './stats/stats.component';
import { AdminComponent } from './admin/admin.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { WorkLoadTableComponent } from './work-load-table/work-load-table.component';
import { ChartsComponent } from './charts/charts.component';
import { PermetionComponent } from './permetion/permetion.component';

@NgModule({
  declarations: [
    AppComponent,
    WlcComponent,
    SignupComponent,
    NavbarComponent,
    LoginComponent,
    BaseComponent,
    HomeComponent,
    StatsComponent,
    AdminComponent,
    ScheduleComponent,
    WorkLoadTableComponent,
    ChartsComponent,
    PermetionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    RouterModule,
    ReactiveFormsModule,
    ChartModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
