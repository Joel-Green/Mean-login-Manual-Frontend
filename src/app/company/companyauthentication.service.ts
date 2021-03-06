import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CompanyauthenticationService {

   url = 'http://localhost:3000/companies';
  constructor(private http: HttpClient, private router: Router) { }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //jwt getting / settings etc
  //setting the jwt to localStorage which signifies Login
  setJwt(token) {
    // this.http.get('http://localhost:3000').subscribe((res:any)=>{
    // console.log(res)
    if (token) {
      // token
      localStorage.setItem('company-token', token);
    }
    else
    {
      alert('No token Recieved');
    }
  }

  //returns the payload that is the details of user in local storage
  getJwt() {
    let token = localStorage.getItem('company-token');
    if(token)
    {
    let payload = token.split('.')[1]
    payload = window.atob(payload)
    // window.atob(res.token)
    console.log(payload);
    return JSON.parse(payload);
  }
  else
  {
    return null
  }
  }

  //removes jwt auth token from local storage signifing logout
  removeJwt() {
    window.localStorage.removeItem('company-token');
    // this.router.navigateByUrl('/');
  }

  // this returns the users details form local storage
  getDetails() {
    let details = this.getJwt()
    return details;
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //register User
  register(name, email, password, phoneno) {
    let obj={name,email,password,phoneno}
    this.http.post(`${this.url}/add`,obj).subscribe((res:any)=>{
      if(res.message)
      {
        alert(res.message)
      }
      else{
        alert("registration complete")
        this.router.navigateByUrl('/companylogin');
      }
      

      console.log(res)})
  }

  //login User
  login(email,password)
  {
    let obj ={ email, password };
    return this.http.post(`${this.url}/login`,obj).subscribe((res:any)=>{
      if(res.message)
      {
        alert(res.message);
      }
      else
      {
        this.setJwt(res.token)
        console.log(res);
        this.router.navigateByUrl('/companyprofile');
        alert('logged in');
      }
    })
  }

  //logout User
  logout()
  {
    this.removeJwt();
    this.router.navigateByUrl('/login');
  }
}
