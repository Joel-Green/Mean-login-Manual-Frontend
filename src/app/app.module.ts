import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http' ;
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { AdminregisterComponent } from './admin/adminregister/adminregister.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminprofileComponent } from './admin/adminprofile/adminprofile.component';
import { CompanyprofileComponent } from './company/companyprofile/companyprofile.component';
import { CompanyloginComponent } from './company/companylogin/companylogin.component';
import { CompanyregisterComponent } from './company/companyregister/companyregister.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    HeaderComponent,
    AdminregisterComponent,
    AdminloginComponent,
    AdminprofileComponent,
    CompanyprofileComponent,
    CompanyloginComponent,
    CompanyregisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
