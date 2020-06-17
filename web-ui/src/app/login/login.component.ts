import { Component, OnInit, Input } from '@angular/core';
import { GlobalConstant } from '../common/globalconstant';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string ='';
  password: string ='';

  constructor(private router: Router) { }

  getPassword(){
    return this.password;
  }

  subscribePage(){
    this.router.navigate(['/SubscribePage'])
    return 0
  }

  getUsername(){
    return this.username;
  }

  loginPressed(){
    GlobalConstant.USER_NAME_=this.username;
    console.log("Login pressé");
  }

  ngOnInit(): void {
  }

}
