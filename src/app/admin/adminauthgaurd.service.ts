import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AdminauthenticationService } from './adminauthentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminauthgaurdService {

constructor(private auth:AdminauthenticationService, private router:Router) { }
  canActivate():boolean{
    if(!this.auth.getJwt())
    {
      this.router.navigateByUrl('/adminlogin');
      return false
    }
    else
    {
      return true
    }
  }
}
