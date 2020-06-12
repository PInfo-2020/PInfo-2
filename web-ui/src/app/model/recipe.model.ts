import { Ingredient } from './../listrecipe/listrecipe.component';

export class Recipe {
  public name: string;
  public personnumber: string;
  public preptime: string;
  public preptext: string;
  public descriptiontext: string;

  public ingredientlist: ListingredientComponent[];

  /*public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];*/

  /*constructor(name: string, description: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }*/

  constructor(name: string, preptext: string, ingredients: Ingredient[]) {
    this.name = name;
    this.preptext = description;
    /*this.imagePath = imagePath;*/
    this.ingredientlist = ingredients;
  }
}
