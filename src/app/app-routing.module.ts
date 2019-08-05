import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { CompanyloginComponent } from './company/companylogin/companylogin.component';
import { CompanyregisterComponent } from './company/companyregister/companyregister.component';
import { CompanyprofileComponent } from './company/companyprofile/companyprofile.component';
import { AdminregisterComponent } from './admin/adminregister/adminregister.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminprofileComponent } from './admin/adminprofile/adminprofile.component';
import { CompanyauthgaurdService } from './company/companyauthgaurd.service';
import { AdminauthgaurdService } from './admin/adminauthgaurd.service';

const routes: Routes = [
  //user routes
  {path:'',component:RegisterComponent},
  { path:'login', component:LoginComponent},
  {
    path:'profile', 
    component:ProfileComponent,
    canActivate:[AuthGaurdService]//authgaurd service
  },

  //company routes
  { path:'companylogin', component:CompanyloginComponent},
  { path:'companyregister', component:CompanyregisterComponent },
  { path:'companyprofile', 
    component:CompanyprofileComponent,
    canActivate:[CompanyauthgaurdService]
  },

  //admin routes
  { path:'adminregister', component:AdminregisterComponent},
  { path:'adminlogin', component:AdminloginComponent },
  { path:'adminprofile', 
    component:AdminprofileComponent,
    canActivate:[AdminauthgaurdService]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
