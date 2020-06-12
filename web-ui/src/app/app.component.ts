import { Component, Input } from '@angular/core';
/*import { setTimeout } from 'timers';*/
import{ GlobalConstant } from './common/globalconstant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuth = false;
  gl = GlobalConstant.siteTitle;
  title = 'FridgeToPlate';

  constructor(){}


}
