import { Component, OnInit } from '@angular/core';
import { AdminauthenticationService } from '../adminauthentication.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  email;
  password;
  constructor(private auth:AdminauthenticationService) { }

  ngOnInit() {
  }
  login()
  {
    this.auth.login(this.email,this.password);
  }


}
