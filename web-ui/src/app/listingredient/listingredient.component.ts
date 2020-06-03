import { Component, OnInit, Input } from '@angular/core';
import{ GlobalConstant } from '../common/globalconstant';


@Component({
  selector: 'app-listingredient',
  templateUrl: './listingredient.component.html',
  styleUrls: ['./listingredient.component.css']
})
export class ListingredientComponent implements OnInit {
  name: string ='Persil';
  image: string ='https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg';
  unit: number=2;
  quantity: string='2';
  @Input() modeadd=false;
  @Input() listingredient;
  @Input() iseditable=false;


  constructor() { }


  deleteButton(indexOfelement,item){
    this.listingredient.splice(indexOfelement,1);
    console.log("Suppression de la liste des ingrédients:");
    console.log(item);
    /*var filtered = this.listingredient.filter(function(item) {
      return item.name !== input.name
      || item.unit !== input.unit
      || item.quantity !== item.quantity;
   });*/
   /*this.listingredient=filtered;*/
  }

  addIngredient(position,ingredient){
    console.log("Ajout de cet ingrédient à mon frigo:");
    console.log(ingredient);
    GlobalConstant.INGREDIENT_LIST_.push(ingredient);
  }

  addButton(){
    console.log("Ajout d'un ingrédient:");
    console.log({image:this.image,name:this.name,quantity:this.quantity,unit:this.unit});
    this.listingredient.push({image:this.image,name:this.name,quantity:this.quantity,unit:this.unit});
  }

  ngOnInit(): void {
  }

}
