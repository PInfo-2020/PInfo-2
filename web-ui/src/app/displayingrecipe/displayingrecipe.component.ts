import { Component, OnInit } from '@angular/core';
import{ GlobalConstant } from '../common/globalconstant';
import { DatabasehttpComponent } from '../databasehttp/databasehttp.component';
@Component({
  selector: 'app-displayingrecipe',
  templateUrl: './displayingrecipe.component.html',
  styleUrls: ['./displayingrecipe.component.css']
})
export class DisplayingrecipeComponent implements OnInit {
  recipename: string =GlobalConstant.BUFFER_RECIPE_["name"];/*Name of the recipe.*/
  personnumber: string =GlobalConstant.BUFFER_RECIPE_["personnumber"];/*How much people.*/
  preptime: string=GlobalConstant.BUFFER_RECIPE_["preptime"];/*Preparation time.*/
  preptext: string =GlobalConstant.BUFFER_RECIPE_["preptext"];/*How to prepare recipe.*/
  descriptiontext: string =GlobalConstant.BUFFER_RECIPE_["descriptiontext"];/*Description of the recipe.*/
  commtext: "";/*Store comment.*/
  ratinggrade: string=GlobalConstant.BUFFER_RECIPE_["grade"];
  sendcomm: string='';
  sendgrade: string='';
  recipeimage: string=GlobalConstant.BUFFER_RECIPE_["image"];
  ingredientlist = [];
  constructor(private httprest: DatabasehttpComponent) { }


  modifyRecipe(){
    console.log("Modification recette")
    console.log("Modification recette")
  }

  sendComment(){
    console.log("Comment sended:")
    console.log(this.sendcomm);
    console.log("PublishRecipe appuyé.")
    var item={
      name:this.recipename,
      personnumber:this.personnumber,
      preptime:this.preptime,
      preptext:this.preptext,
      ingredientlist:this.ingredientlist,
      comment:this.sendcomm,
      postautor:"default autor"

    }
    console.log(item)
    console.log(item)

    this.httprest.httpresponse=[];
    this.httprest.sendaddr="http://localhost:8080/JerseyDemo/myfridge/postcomm";
    this.httprest.sendjson=JSON.stringify(item);
    this.httprest.restSend();
  }


  sendGrade(){
    console.log("Grade sended:");
    console.log(this.sendgrade);
    var item={
      name:this.recipename,
      personnumber:this.personnumber,
      preptime:this.preptime,
      preptext:this.preptext,
      ingredientlist:this.ingredientlist,
      grade:this.sendgrade,
      postautor:"default autor"

    }
    console.log(item)
    console.log(item)

    this.httprest.httpresponse=[];
    this.httprest.sendaddr="http://localhost:8080/JerseyDemo/myfridge/postcomm";
    this.httprest.sendjson=JSON.stringify(item);
    this.httprest.restSend();
  }


  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

  ngOnInit(): void {
    console.log("****")
    console.log("****")
    console.log(GlobalConstant.BUFFER_RECIPE_);
    console.log(GlobalConstant.BUFFER_RECIPE_);
    if(GlobalConstant.BUFFER_RECIPE_["ingredientlist"].length!=0){
    this.ingredientlist=JSON.parse(GlobalConstant.BUFFER_RECIPE_["ingredientlist"]);
  }
    /**/
    /*(async () => {
    while (GlobalConstant.BUFFER_RECIPE_.length==0){
      console.log("****")
      console.log("****")
      await this.delay(400);
    }
    console.log(GlobalConstant.BUFFER_RECIPE_);
    console.log(GlobalConstant.BUFFER_RECIPE_);
  })();*/

  }

}
