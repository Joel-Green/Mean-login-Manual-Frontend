import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate{

  constructor(private auth:AuthenticationService, private router:Router) { }
  canActivate():boolean{
    if(!this.auth.getJwt())
    {
      this.router.navigateByUrl('/login');
      return false
    }
    else
    {
      // this.auth.authenticate();
      return true
    }
  }
}
