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
      personnumber:this.p

    }
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}


  saveRecipe(){
    console.log("Enregistrement des favoris en cours.")
    this.httprest.sendaddr=this.httpsendmyrecipe;
    var send=
    [{
      descriptiontext: this.descriptiontext,
      grade: "undefined",
      image: 'https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg',
      ingredientlist: this.ingredientlist,
      name: this.recipename,
      personnumber: this.personnumber,
      preptext: this.preptext,
      preptime: this.preptime
    }];
    /*this.httpsendmyrecipe="https://lookandcookproject.firebaseio.com/users/defaultuser/myrecipe/"+this.recipename+".json"*/
    this.httprest.sendaddr=this.httpsendmyrecipe;
    this.httprest.httpsend=send;
    this.httprest.dataSendWithPost();


    /*Take what is on the server, add the new recipe, and send back*/
    /*(async () => {
      this.httprest.httpresponse=[];
      this.httprest.recvaddr=this.httpsendmyrecipe;
      this.httprest.dataReceiveWithGet();
      while (this.httprest.httpresponse.length==0){
        await this.delay(4);
      }
      GlobalConstant.MY_RECIPE_= this.httprest.httpresponse;
      this.httprest.httpsend=GlobalConstant.MY_RECIPE_.concat(send);
      this.httprest.dataSendWithPut();
  })();*/
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
