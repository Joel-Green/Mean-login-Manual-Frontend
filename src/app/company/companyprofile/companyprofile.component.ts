import { Component, OnInit } from '@angular/core';
import { CompanyauthenticationService } from '../companyauthentication.service';

@Component({
  selector: 'app-companyprofile',
  templateUrl: './companyprofile.component.html',
  styleUrls: ['./companyprofile.component.css']
})
export class CompanyprofileComponent implements OnInit {

  company
  constructor(private auth:CompanyauthenticationService) { }

  ngOnInit() {
    this.company=this.auth.getDetails();
  }
  logout()
  {
    this.auth.logout();
  }

}
