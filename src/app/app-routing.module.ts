import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WlcComponent } from './wlc/wlc.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BaseComponent } from './base/base.component';
import { HomeComponent } from './home/home.component';
import { StatsComponent } from './stats/stats.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: WlcComponent },
  { path: 'LogIn', component: LoginComponent },
  { path: 'SignUp', component: SignupComponent },
  { path: 'Base', component: BaseComponent, children: [
    { path: 'Shedule', component: HomeComponent },
    { path: 'Stats', component: StatsComponent },
    { path: 'Admin', component: AdminComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
