import { Component, OnInit } from '@angular/core';
import { AdminauthenticationService } from '../adminauthentication.service';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {

  constructor(private auth:AdminauthenticationService) { }

  admin
  ngOnInit() {
   this.admin=this.auth.getDetails();
  }

  logout()
  {
    this.auth.logout();
  }

}
