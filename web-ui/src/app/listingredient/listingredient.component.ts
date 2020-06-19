import { Component, OnInit, Input } from '@angular/core';
import{ GlobalConstant } from '../common/globalconstant';
import { DatabasehttpComponent } from '../databasehttp/databasehttp.component';


@Component({
  selector: 'app-listingredient',
  templateUrl: './listingredient.component.html',
  styleUrls: ['./listingredient.component.css']
})
export class ListingredientComponent implements OnInit {


  name: string ='Persil';
  image: string ='';
  unit: number=2;
  quantity: string='2';
  @Input() modeadd=false;
  @Input() modeuser=true;
  @Input() listingredient;
  @Input() iseditable=false;


  sendingredient=[];

  constructor(private httprest: DatabasehttpComponent) { }


  deleteButton(indexOfelement,item){
    this.listingredient.splice(indexOfelement,1);
    console.log("Suppression de la liste des ingrédients:");
    console.log(item);
    console.log("Suppression de mes recettes:");
    console.log(item);
    if(this.modeuser==true){


  }


  }

  addIngredient(indexOfelement,ingredient){
    console.log("Ajout de cet ingrédient à mon frigo:");
    console.log(ingredient);
    var el={
      name:ingredient.name,
      personnumber:"item.personnumber",
      preptime:"item.preptime",
      preptext:"item.preptext",
      ingredientlist:[ingredient]

    }
    this.httprest.addRecipe("myingredient",el);



  }

  addButton(){/*It is here where we define the sending of the ingrdient."/"*/
    console.log("Ajout d'un ingrédient:");
    console.log({image:this.image,name:this.name,quantity:this.quantity,unit:this.unit});
    var item={image:this.image,name:this.name,quantity:this.quantity,unit:this.unit};
    this.listingredient.push(item);
    if(this.modeuser==true){
      var el={
        name:item.name,
        personnumber:"item.personnumber",
        preptime:"item.preptime",
        preptext:"item.preptext",
        ingredientlist:[item]

      }
      this.httprest.addRecipe("myingredient",el);


  }


  }

  ngOnInit(): void {
  }

}
