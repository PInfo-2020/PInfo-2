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
  constructor(private httprest: DatabasehttpComponent) { }

  searchButton(){
    console.log("nom  "+this.recipename)
    console.log("personnumber "+this.personnumber)
    console.log("time "+this.preptime)
    console.log("note  "+this.ratinggrade)
    console.log("Search button is pressed.")
    this.httprest.httpresponse=[];
    this.httprest.sendaddr="http://localhost:8080/JerseyDemo/myfridge/searchre";
    this.httprest.sendjson=JSON.stringify(item);
    this.httprest.restSend();


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


  VegetarianSwitch(){
    if(this.VegetarianCheck){this.VegetarianCheck=false;}
    else{this.VegetarianCheck=true; }
    console.log("Checkbox Vegetarian");
  }


  FridgeSwitch(){
    if(this.FridgeCheck){this.FridgeCheck=false;}
    else{this.FridgeCheck=true; }
    console.log("Checkbox Fridge");
  }



  ngOnInit(): void {
  }

}
