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
    console.log("note  "+this.ratinggrade);
    console.log("Search button is pressed.");

    (async () => {
    this.httprest.searchRecipe(encodeURI("published:  "+this.recipename));
    while (this.httprest.recipe_ok_==""){
      await this.delay(4);
    }
    this.httprest.recipe_ok_="";
    this.searched_recipe_=this.httprest.recipe_list_;
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
