import { Component, OnInit, Input } from '@angular/core';
import { GlobalConstant } from '../common/globalconstant';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string ='';
  password: string ='';

  constructor() { }

  getPassword(){
    return this.password;
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
