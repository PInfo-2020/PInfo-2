import { Component, Input } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
/*import { setTimeout } from 'timers';*/
import{ GlobalConstant } from './common/globalconstant';

import {HttpClientModule} from '@angular/common/http';
import { ModulehttpService } from './modulehttp.service';


import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuth = false;
  gl = GlobalConstant.siteTitle;
  title = 'FridgeToPlate';
  recvjson=[];


  constructor(){}

  ngOnInit(): void {


}


}
