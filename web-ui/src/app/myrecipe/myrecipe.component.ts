import { Component, OnInit, ViewChild } from '@angular/core';
import{ GlobalConstant } from '../common/globalconstant';
import { DatabasehttpComponent } from '../databasehttp/databasehttp.component';
import { environment } from '../../environments/environment';

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


      var flag=0;
    this.httprest.recvRecipe("myrecipe");
    while (this.httprest.recipe_ok_=="" && flag<20){
      await this.delay(4);
      flag+=1;
    }
    console.log("------------");
    console.log(flag);
    if(flag<20){
    this.httprest.recipe_ok_="";
    this.my_recipe_=this.httprest.recipe_list_;
  }
  flag=0



    this.httprest.recvRecipe("myfavourite");
    while (this.httprest.recipe_ok_=="" && flag<100){
      await this.delay(4);
      flag+=1;
    }
    if(flag<20){
    this.httprest.recipe_ok_="";
    this.recipefavourite=this.httprest.recipe_list_;
  }
  flag=0

    this.httprest.recvRecipe("mypublication");
    while (this.httprest.recipe_ok_=="" && flag<20){
      await this.delay(4);
      flag+=1;
    }
    if(flag<20){
    this.httprest.recipe_ok_="";
    this.published_recipe_=this.httprest.recipe_list_;
  }
  flag=0




    })();


}


  }


