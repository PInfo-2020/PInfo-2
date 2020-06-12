import { Component, OnInit } from '@angular/core';
import{ GlobalConstant } from '../common/globalconstant';


@Component({
  selector: 'app-createrecipe',
  templateUrl: './createrecipe.component.html',
  styleUrls: ['./createrecipe.component.css']
})
export class CreaterecipeComponent implements OnInit {
  recipename: string ='';/*Name of the recipe.*/
  personnumber: string ='';/*How much people.*/
  preptime: string='';/*Preparation time.*/
  preptext: string ='';/*How to prepare recipe.*/
  descriptiontext: string ='';/*Description of the recipe.*/
  ingredientlist=GlobalConstant.CREATE_RECIPE_;/*List of the ingredients stored in the fake database.*/


  constructor() { }
  publishRecipe(){
    console.log("PublishRecipe appuyé.")
  }

  getDescriptionText(){/*Give the description of the recipe.*/
    return this.descriptiontext;
  }

  getPreparationText(){/*Give the instruction to make the recipe.*/
    return this.preptext;
  }
  getPreparationTime(){/*Give the preparation time.*/
    return this.preptime;
  }
  getPersonNumber(){/*Give the number of person.*/
    return this.personnumber;
  }

  getRecipeName(){/*Give the name of the recipe.*/
    return this.recipename;
  }



  ngOnInit(): void {
  }

}
