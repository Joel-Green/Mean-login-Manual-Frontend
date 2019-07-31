import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private auth:AuthenticationService) { }

  user;
  ngOnInit() {
    this.user=this.auth.getDetails();
    // console.log(this.user)
    // alert(this.user)
  }
  logout()
  {
    this.auth.logout();
  }

}
