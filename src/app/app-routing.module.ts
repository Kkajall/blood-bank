import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { UpdateBloodComponent } from './components/update-blood/update-blood.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminuserComponent } from './components/admin/adminuser/adminuser.component';
import { DonateBloodComponent } from './components/donate-blood/donate-blood.component';
import { GetBloodComponent } from './components/get-blood/get-blood.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddBloodComponent } from './components/add-blood/add-blood.component';
import { SignupComponent } from './components/signup/signup.component';
import { HospitalLoginComponent } from './components/hospital-login/hospital-login.component';
import { HospitalHomeComponent } from './components/hospital-home/hospital-home.component';

const routes: Routes = [
  { path: '', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'hospitallogin', component: HospitalLoginComponent },
  { path: 'donateblood', component: DonateBloodComponent },
  { path: 'getblood', component: GetBloodComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'hospitalhome', component: HospitalHomeComponent },
  {path: 'adminuser/update-blood', component: UpdateBloodComponent},
  {path: 'adminuser/page', component: UpdateBloodComponent},
  {path: 'adminuser/add-blood', component: AddBloodComponent},
  {path: 'adminuser', component: AdminuserComponent},
  {path: 'adminhome', component: AdminuserComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
