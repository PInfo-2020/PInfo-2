import { Component, OnInit } from '@angular/core';
import{ GlobalConstant } from '../common/globalconstant';

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
  searched_recipe_=GlobalConstant.SEARCHED_RECIPE_;
  constructor() { }

  searchButton(){
    console.log("Search button is pressed.")
  }

  getRating(){/*Give the grade of the recipe.*/
    return this.ratinggrade;
  }


  publishRecipe(){
    console.log("PublishRecipe appuyé.")
  }


  getPreparationTime(){/*Give the time for the preparation.*/
    return this.preptime;
  }
  getPersonNumber(){/*Give the number of person.*/
    return this.personnumber;
  }

  getRecipeName(){/*Give the name of the recipe.*/
    return this.recipename;
  }


  VegetarianSwitch(){/*Indicate if there is only need for vegetarian recipe.*/
    if(this.VegetarianCheck){this.VegetarianCheck=false;}
    else{this.VegetarianCheck=true; }
    console.log("Checkbox Vegetarian");
  }


  FridgeSwitch(){  /*Indicate if there is only need for ingredient in the fridge.*/
    if(this.FridgeCheck){this.FridgeCheck=false;}
    else{this.FridgeCheck=true; }
    console.log("Checkbox Fridge");
  }



  ngOnInit(): void {
  }

}
