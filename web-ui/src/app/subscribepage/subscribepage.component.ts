import { Component, OnInit } from '@angular/core';
import { DatabasehttpComponent } from '../databasehttp/databasehttp.component';

@Component({
  selector: 'app-subscribepage',
  templateUrl: './subscribepage.component.html',
  styleUrls: ['./subscribepage.component.css']
})
export class SubscribepageComponent implements OnInit {
  username: string ='';
  password: string ='';
  constructor(private httprest: DatabasehttpComponent) { }


  getPassword(){
    return this.password;
  }

  getUsername(){
    return this.username;
  }

  loginPressed(){
    console.log("Login pressé");
  }


  ngOnInit(): void {
  }

}
