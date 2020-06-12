import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribepage',
  templateUrl: './subscribepage.component.html',
  styleUrls: ['./subscribepage.component.css']
})
export class SubscribepageComponent implements OnInit {
  username: string ='';
  password: string ='';
  constructor() { }


  getPassword(){/*Give the password.*/
    return this.password;
  }

  getUsername(){/*Give the username.*/
    return this.username;
  }

  loginPressed(){
    console.log("Login pressé");
  }


  ngOnInit(): void {
  }

}
