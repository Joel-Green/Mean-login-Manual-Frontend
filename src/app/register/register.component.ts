import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name;
  email;
  password;
  phoneno;

  constructor(private auth:AuthenticationService) { }

  ngOnInit() {
    // this.auth.removeJwt();
  }

  register()
  {
   this.auth.register(this.name,this.email,this.password,this.phoneno) 
   console.log(this.name,this.email,this.password,this.phoneno) 
  }

}
