import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { AuthGaurdService } from './auth-gaurd.service';

const routes: Routes = [
  {path:'',component:RegisterComponent},
  { path:'login', component:LoginComponent},
  {
    path:'profile', 
    component:ProfileComponent,
    canActivate:[AuthGaurdService]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
