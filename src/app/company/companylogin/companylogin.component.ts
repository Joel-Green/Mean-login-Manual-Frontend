import { Component, OnInit } from '@angular/core';
import { CompanyauthenticationService } from '../companyauthentication.service';

@Component({
  selector: 'app-companylogin',
  templateUrl: './companylogin.component.html',
  styleUrls: ['./companylogin.component.css']
})
export class CompanyloginComponent implements OnInit {
  email;
  password

  constructor(private auth:CompanyauthenticationService) { }

  ngOnInit() {
  }

  login()
  {
    this.auth.login(this.email,this.password);
  }
}
