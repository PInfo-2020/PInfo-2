import { Component, OnInit } from '@angular/core';
import{ GlobalConstant } from '../common/globalconstant';
import { DatabasehttpComponent } from '../databasehttp/databasehttp.component';


@Component({
  selector: 'app-createrecipe',
  templateUrl: './createrecipe.component.html',
  styleUrls: ['./createrecipe.component.css']
})
export class CreaterecipeComponent implements OnInit {
  recipename: string ='';/*Name of the recipe.*/
  httpsendmyrecipe="https://lookandcookproject.firebaseio.com/users/defaultuser/myrecipe.json"
  personnumber: string ='';/*How much people.*/
  preptime: string='';/*Preparation time.*/
  preptext: string ='';/*How to prepare recipe.*/
  descriptiontext: string ='';/*Description of the recipe.*/
  ingredientlist=[];
  httprecipe=[];


  constructor(private httprest: DatabasehttpComponent) { }
  publishRecipe(){
    console.log("PublishRecipe appuyé.")
    var item={
      name:this.recipename,
      personnumber:this.personnumber,
      preptime:this.preptime,
      preptext:this.preptext,
      ingredientlist:this.ingredientlist

    }
    console.log(item)
    console.log(item)
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}


  saveRecipe(){
  }

  getDescriptionText(){
    return this.descriptiontext;
  }

  getPreparationText(){
    return this.preptext;
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



  ngOnInit(): void {
  }

}
