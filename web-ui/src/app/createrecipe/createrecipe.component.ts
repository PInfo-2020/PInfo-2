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
  im:string='';
  httpsendmyrecipe="https://lookandcookproject.firebaseio.com/users/defaultuser/myrecipe.json"
  personnumber: string ='';/*How much people.*/
  preptime: string='';/*Preparation time.*/
  preptext: string ='';/*How to prepare recipe.*/
  descriptiontext: string ='';/*Description of the recipe.*/
  ingredientlist=[];
  httprecipe=[];


  constructor(private httprest: DatabasehttpComponent) { }


  saveRecipe(){
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

    this.httprest.httpresponse=[];
    this.httprest.sendaddr=GlobalConstant.HTTP_POST_MY_RECIPE_;
    this.httprest.sendjson=JSON.stringify(item);
    this.httprest.restSend();
  }

  getImage(im){
    return im;
  }


  handleUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        console.log(reader.result);
    };
    this.im=reader.result.toString();
    return 0
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