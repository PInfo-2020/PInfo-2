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


    this.httprest.recvRecipeII("myingredient");
    var flag=0;
    while (this.httprest.recipe_ok_=="" && flag<20){
      console.log("wait")
      await this.delay(4);
    }
    this.httprest.recipe_ok_="";
    var tempor=this.httprest.recipe_list_;
    console.log(tempor)
   this.ingredientlist=[];
   for (const ingr in tempor) {
     var data=tempor[ingr]['units'];
     console.log(JSON.parse(data))
     this.ingredientlist.push(JSON.parse(data));
    }
  })();


  }

}
