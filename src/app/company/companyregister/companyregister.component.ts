import { Component, OnInit } from '@angular/core';
import { CompanyauthenticationService } from '../companyauthentication.service';

@Component({
  selector: 'app-companyregister',
  templateUrl: './companyregister.component.html',
  styleUrls: ['./companyregister.component.css']
})
export class CompanyregisterComponent implements OnInit {


  name;
  email;
  password;
  phoneno;
  constructor(private auth:CompanyauthenticationService) { }

  ngOnInit() {
  }

  register()
  {
   this.auth.register(this.name,this.email,this.password,this.phoneno) 
   console.log(this.name,this.email,this.password,this.phoneno) 
  }


}
