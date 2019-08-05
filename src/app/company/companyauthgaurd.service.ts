import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { CompanyauthenticationService } from './companyauthentication.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyauthgaurdService {

  constructor(private auth:CompanyauthenticationService, private router:Router) { }
  canActivate():boolean{
    if(!this.auth.getJwt())
    {
      this.router.navigateByUrl('/companylogin');
      return false
    }
    else
    {
      return true
    }
  }
}
