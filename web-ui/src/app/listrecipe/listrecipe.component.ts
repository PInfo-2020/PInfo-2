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

    (async () => {
      this.httprest.recvaddr=GlobalConstant.INGREDIENT_DELETE_+item.name;
      this.httprest.dataDelete();
      while(this.httprest.httpresponse.length==0){
        await this.delay(4);
      }
    })();

    console.log("Suppression de la liste des recettes publiées:");
    console.log(item);

  }

  toLink(recipe){
    GlobalConstant.BUFFER_RECIPE_=recipe;
    this.router.navigate(['/DisplayRecipe'])


  }

  deleteRecipe(indexOfelement,item){
    (async () => {
    this.httprest.recvaddr=GlobalConstant.INGREDIENT_DELETE_+item.name;
    this.httprest.dataDelete();
    while(this.httprest.httpresponse.length==0){
      await this.delay(4);
    }
  })();

    console.log("Suppression de mes recettes:");
    console.log(item);

  }

  deleteFavourite(indexOfelement,item){
    (async () => {
      this.httprest.recvaddr=GlobalConstant.INGREDIENT_DELETE_+item.name.replace("published:  ","favourite:    ");
      this.httprest.dataDelete();
      while(this.httprest.httpresponse.length==0){
        await this.delay(4);
      }
    })();

    console.log("Suppression favori:");
    console.log(item);

  }

  addPublish(item){
    var el={
      name:"published:  "+item.name,
      personnumber:item.personnumber,
      preptime:item.preptime,
      preptext:item.preptext,
      ingredientlist:JSON.parse(item.ingredientlist)

    }


    this.httprest.addRecipe("mypublication",el);


    console.log("Ajout à la liste des recettes publiées:");
    console.log(item);
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}


  addFavourite(item){
    var el={
      name:"favourite:  "+item.name.substr(10,item.name.length),
      personnumber:item.personnumber,
      preptime:item.preptime,
      preptext:item.preptext,
      ingredientlist:JSON.parse(item.ingredientlist)

    }


    this.httprest.addRecipe("myfavourite",el);



  }
  ngOnInit(): void {
  }

}
