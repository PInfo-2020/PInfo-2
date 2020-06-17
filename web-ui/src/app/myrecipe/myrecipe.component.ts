import { Component, OnInit, ViewChild } from '@angular/core';
import{ GlobalConstant } from '../common/globalconstant';
import { DatabasehttpComponent } from '../databasehttp/databasehttp.component';

@Component({
  selector: 'app-myrecipe',
  templateUrl: './myrecipe.component.html',
  styleUrls: ['./myrecipe.component.css']
})
export class MyrecipeComponent implements OnInit {
  my_recipe_=[];
  next=0;
  published_recipe_=[];
  /*published_recipe_=GlobalConstant.PUBLISHED_RECIPE_;*/
  recipefavourite=[];

  httprecvmyfavourite=GlobalConstant.HTTP_RECV_MY_FAVOURITE_;
  httprecvmypublication=GlobalConstant.HTTP_RECV_MY_PUBLICATION_;
  httprecvmyrecipe=GlobalConstant.HTTP_RECV_MY_RECIPE_;
  httpsendmyfavourite=GlobalConstant.HTTP_SEND_MY_FAVOURITE_;
  httpsendmypublication=GlobalConstant.HTTP_SEND_MY_PUBLICATION_;
  httpsendmyrecipe=GlobalConstant.HTTP_SEND_MY_RECIPE_;


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
      this.httprest.recvaddr=this.httprecvmyfavourite;
      this.httprest.restRecv();
      console.log(this.httprest.httpresponse)
      console.log(this.httprest.httpresponse.length)
      while (this.httprest.httpresponse.length==0){
        await this.delay(4);
      }
      console.log("connection terminé")
      console.log(this.httprest.httpresponse);
      if (this.httprest.httpresponse instanceof Array){
        this.recipefavourite=this.httprest.httpresponse;
      }
      else{
        this.recipefavourite=[this.httprest.httpresponse];
      }


      this.httprest.httpresponse=[];
      this.httprest.recvaddr=this.httprecvmypublication;
      this.httprest.restRecv();
      console.log(this.httprest.httpresponse)
      console.log(this.httprest.httpresponse.length)
      while (this.httprest.httpresponse.length==0){
        await this.delay(4);
      }
      console.log("connection terminé")
      console.log(this.httprest.httpresponse);
      if (this.httprest.httpresponse instanceof Array){
        this.published_recipe_=this.httprest.httpresponse;
      }
      else{
        this.published_recipe_=[this.httprest.httpresponse];
      }


      this.httprest.httpresponse=[];
      this.httprest.recvaddr=this.httprecvmyrecipe;
      this.httprest.restRecv();
      console.log(this.httprest.httpresponse)
      console.log(this.httprest.httpresponse.length)
      while (this.httprest.httpresponse.length==0){
        await this.delay(4);
      }
      console.log("connection terminé")
      console.log(this.httprest.httpresponse);
      if (this.httprest.httpresponse instanceof Array){
        this.my_recipe_=this.httprest.httpresponse;
      }
      else{
        this.my_recipe_=[this.httprest.httpresponse];
      }


    })();


}


  }


