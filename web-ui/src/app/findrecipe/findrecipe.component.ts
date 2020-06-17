import { Component, OnInit } from '@angular/core';
import{ GlobalConstant } from '../common/globalconstant';
import { DatabasehttpComponent } from '../databasehttp/databasehttp.component';

@Component({
  selector: 'app-findrecipe',
  templateUrl: './findrecipe.component.html',
  styleUrls: ['./findrecipe.component.css']
})
export class FindrecipeComponent implements OnInit {
  ratinggrade: string='';
  recipename: string ='';/*Name of the recipe.*/
  personnumber: string ='';/*How much people.*/
  preptime: string='';/*Preparation time.*/
  FridgeCheck=true;
  VegetarianCheck=true;
  searched_recipe_=[];
  constructor(private httprest: DatabasehttpComponent) { }

  searchButton(){
    this.searched_recipe_=[];
    console.log("nom  "+this.recipename)
    console.log("personnumber "+this.personnumber)
    console.log("time "+this.preptime)
    console.log("note  "+this.ratinggrade)
    console.log("Search button is pressed.")
    this.httprest.httpresponse=[];
    this.httprest.sendaddr=GlobalConstant.HTTP_SEARCH_SOME_RECIPE_;
    var item={
      name:this.recipename,
      personnumber:this.personnumber,
      preptime:this.preptime,
      grade:this.ratinggrade}
    this.httprest.sendjson=JSON.stringify(item);
    this.httprest.restSend();
    console.log("réponse du serveur:")
    console.log("réponse du serveur:"+this.httprest.httpresponse);




    (async () => {
      while (this.httprest.httpresponse.length==0){
        await this.delay(4);
      }

      this.httprest.httpresponse=[];
      this.httprest.recvaddr=GlobalConstant.HTTP_RETURN_SEARCH_RESULT_;
      this.httprest.restRecv();
      console.log(this.httprest.httpresponse)
      console.log(this.httprest.httpresponse.length)
      while (this.httprest.httpresponse.length==0){
        await this.delay(4);
      }
      console.log("connection terminé")
      console.log(this.httprest.httpresponse);
      if (this.httprest.httpresponse instanceof Array){
        this.searched_recipe_=this.httprest.httpresponse;
      }
      else{
        this.searched_recipe_=[this.httprest.httpresponse];
      }
    })();


  }

  getRating(){
    return this.ratinggrade;
  }


  publishRecipe(){
    console.log("PublishRecipe appuyé.")
  }


  getPreparationTime(){
    return this.preptime;
  }
  getPersonNumber(){
    return this.personnumber;
  }

  getRecipeName(){
    return this.recipename;
  }


  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}





  ngOnInit(): void {




  }

}
