import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email;
  password;

  constructor(private auth:AuthenticationService) { }

  ngOnInit() {
  }
  login()
  {
    this.auth.login(this.email,this.password);
  }

}
