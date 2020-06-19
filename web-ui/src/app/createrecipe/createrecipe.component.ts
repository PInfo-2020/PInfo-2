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
  imag:string='';
  personnumber: string ='';/*How much people.*/
  preptime: string='';/*Preparation time.*/
  preptext: string ='';/*How to prepare recipe.*/
  descriptiontext: string ='';/*Description of the recipe.*/
  ingredientlist=[];
  httprecipe=[];


  constructor(private httprest: DatabasehttpComponent) { }


  saveRecipe(){
    var item={
      name:this.recipename,
      image:String(this.imag),
      personnumber:this.personnumber,
      preptime:this.preptime,
      preptext:this.preptext,
      ingredientlist:this.ingredientlist

    }

    this.httprest.addRecipe("myrecipe",item);


  }

  getImage(im){
    return im;
  }


  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}


  publishRecipe(){
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
