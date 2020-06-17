import { Component, OnInit } from '@angular/core';
import{ GlobalConstant } from '../common/globalconstant';
import { DatabasehttpComponent } from '../databasehttp/databasehttp.component';

@Component({
  selector: 'app-myfridge',
  templateUrl: './myfridge.component.html',
  styleUrls: ['./myfridge.component.css']
})
export class MyfridgeComponent implements OnInit {

  httprecvmyingredient=GlobalConstant.HTTP_RECV_MY_INGREDIENT_;
  httpsendmyingredient=GlobalConstant.HTTP_SEND_MY_INGREDIENT_;

  ingredientlist=[];
  /*ingredientlist=GlobalConstant.INGREDIENT_LIST_;*/
  constructor(private httprest: DatabasehttpComponent) { }

  addButton(){
    console.log("addButoon pressed.")
  }


  deleteButton(){
    console.log("deleteButton pressed.")

  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

  ngOnInit(): void {
    (async () => {
      this.httprest.httpresponse=[];
      this.httprest.recvaddr=this.httprecvmyingredient;
      this.httprest.restRecv();
      console.log(this.httprest.httpresponse)
      console.log(this.httprest.httpresponse.length)
      while (this.httprest.httpresponse.length==0){
        await this.delay(4);
      }
      console.log("connection terminé")
      console.log(this.httprest.httpresponse);
      if (this.httprest.httpresponse instanceof Array){
        this.ingredientlist=this.httprest.httpresponse;
      }
      else{
        this.ingredientlist=[this.httprest.httpresponse];
      }
    })();


  }

}
