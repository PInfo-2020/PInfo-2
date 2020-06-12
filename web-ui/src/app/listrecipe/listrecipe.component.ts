import { Component, OnInit, Input } from '@angular/core';
import{ GlobalConstant } from '../common/globalconstant';

@Component({
  selector: 'app-listrecipe',
  templateUrl: './listrecipe.component.html',
  styleUrls: ['./listrecipe.component.css']
})
export class ListrecipeComponent implements OnInit {
  @Input() modedeletefrompublish=false;
  @Input() modedeletefromrecipe=false;
  @Input() modedeletefromfavourite=false;
  @Input() modepublish=false;
  @Input() modefavourite=false;
  @Input() listrecipe;
  constructor() { }

  deletePublish(position,item){
    console.log("Suppression de la liste des recettes publiées:");
    console.log(item);
    GlobalConstant.PUBLISHED_RECIPE_.splice(position,1);

  }

  deleteRecipe(position,item){
    console.log("Suppression de mes recettes:");
    console.log(item);
    GlobalConstant.MY_RECIPE_.splice(position,1);
  }

  deleteFavourite(position,item){
    console.log("Suppression favori:");
    console.log(item);
    GlobalConstant.FAVOURITE_RECIPE_.splice(position,1);
  }

  addPublish(item){
    console.log("Ajout à la liste des recettes publiées:");
    console.log(item);
    GlobalConstant.PUBLISHED_RECIPE_.push(item);
  }


  addFavourite(item){
    console.log("Ajout favori:");
    console.log(item);
    GlobalConstant.FAVOURITE_RECIPE_.push(item);

  }
  ngOnInit(): void {
  }

}
