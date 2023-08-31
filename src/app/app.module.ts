import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AddBloodComponent } from './components/add-blood/add-blood.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminuserComponent } from './components/admin/adminuser/adminuser.component';
import { DonateBloodComponent } from './components/donate-blood/donate-blood.component';
import { GetBloodComponent } from './components/get-blood/get-blood.component';
import { HomeComponent } from './components/home/home.component';
import { HospitalHomeComponent } from './components/hospital-home/hospital-home.component';
import { HospitalLoginComponent } from './components/hospital-login/hospital-login.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';
import { UpdateBloodComponent } from './components/update-blood/update-blood.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    GetBloodComponent,
    DonateBloodComponent,
    AboutUsComponent,
    HomeComponent,
    AdminComponent,
    AdminuserComponent,
    UpdateBloodComponent,
    AddBloodComponent,
    AdminHeaderComponent,
    SignupComponent,
    HospitalLoginComponent,
    HospitalHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    // ToastsContainer
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }