import { Component, OnInit, Input } from '@angular/core';
import { DatabasehttpComponent } from '../databasehttp/databasehttp.component';

import{ GlobalConstant } from '../common/globalconstant';
import { withModule } from '@angular/core/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listrecipe',
  templateUrl: './listrecipe.component.html',
  styleUrls: ['./listrecipe.component.css']
})
export class ListrecipeComponent implements OnInit {
  @Input() modedeletefrompublish=false;
  @Input() nameform="";
  @Input() modedeletefromrecipe=false;
  @Input() modedeletefromfavourite=false;
  @Input() modepublish=false;
  @Input() modefavourite=false;
  @Input() listrecipe;
  constructor(private httprest: DatabasehttpComponent,private router: Router) { }

  deletePublish(indexOfelement,item){
    this.httprest.httpresponse=[];
    this.httprest.sendaddr="http://localhost:8080/JerseyDemo/myfridge/mypublication/delete";
    this.httprest.sendjson=JSON.stringify(item);
    this.httprest.restSend();
    console.log("Suppression de la liste des recettes publiées:");
    console.log(item);

  }

  toLink(recipe){
    GlobalConstant.BUFFER_RECIPE_=recipe;
    this.router.navigate(['/DisplayRecipe'])

    /**/
   /*while(GlobalConstant.BUFFER_RECIPE_.length==0){
    GlobalConstant.BUFFER_RECIPE_.push(recipe);
  }
    console.log(GlobalConstant.BUFFER_RECIPE_)
    console.log(GlobalConstant.BUFFER_RECIPE_)*/
  }

  deleteRecipe(indexOfelement,item){
    this.httprest.httpresponse=[];
    this.httprest.sendaddr=GlobalConstant.HTTP_DELETE_MY_RECIPE_;
    this.httprest.sendjson=JSON.stringify(item);
    this.httprest.restSend();
    console.log("Suppression de mes recettes:");
    console.log(item);

  }

  deleteFavourite(indexOfelement,item){
    this.httprest.httpresponse=[];
    this.httprest.sendaddr=GlobalConstant.HTTP_DELETE_MY_FAVOURITE_;
    this.httprest.sendjson=JSON.stringify(item);
    this.httprest.restSend();
    console.log("Suppression favori:");
    console.log(item);

  }

  addPublish(item){
    this.httprest.httpresponse=[];
    this.httprest.sendaddr=GlobalConstant.HTTP_POST_MY_PUBLICATION_;
    this.httprest.sendjson=JSON.stringify(item);
    this.httprest.restSend();
    console.log("Ajout à la liste des recettes publiées:");
    console.log(item);
  }


  addFavourite(item){
    this.httprest.httpresponse=[];
    this.httprest.sendaddr=GlobalConstant.HTTP_POST_MY_FAVOURITE_;
    this.httprest.sendjson=JSON.stringify(item);
    this.httprest.restSend();
    console.log("Ajout favori:");
    console.log(item);


  }
  ngOnInit(): void {
  }

}
