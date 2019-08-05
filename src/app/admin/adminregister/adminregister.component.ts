import { Component, OnInit } from '@angular/core';
import { AdminauthenticationService } from '../adminauthentication.service';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {


  name;
  email;
  password;
  phoneno;

  constructor(private auth:AdminauthenticationService) { }

  ngOnInit() {
  }
 register()
  {
   this.auth.register(this.name,this.email,this.password,this.phoneno) 
   console.log(this.name,this.email,this.password,this.phoneno) 
  }


}
