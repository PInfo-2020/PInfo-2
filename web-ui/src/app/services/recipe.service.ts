import { Injectable } from '@angular/core';


import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Recipe } from '../model/recipe.model';
import { Ingredient } from '../listrecipe/listrecipe.component';

import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  public recipies: BehaviorSubject<Recipie[]> = new BehaviorSubject(null);

  constructor(private http: HttpClient) { 
	this.initRecipies();
  }


  initRecipies(): void{
    this.http.get<Recipie[]>('https://mon-projet-cf3d9.firebaseio.com/recipies.json').subscribe( (recipies: Recipie[]) => {
        this.recipies.next(recipies);
    });
  }

   getRecipie(index: number): Observable<Recipie>{
    return this.recipies.pipe(
        filter( ( recipies: Recipie[]) => recipies != null ),
        map( (recipies: Recipie[]) => recipies[index])
    );
  }


     addRecipie(recipie: Recipie): void{
        const recipies = this.recipies.value.slice();

        recipies.push(
            new Recipie(
                recipie.name,
                recipie.image,
                recipie.description,
                recipie.ingredients.map(
                    ingredient => new Ingredient(ingredient.name, ingredient.quantity)
                )
            )
        )

        this.recipies.next(recipies);
        this.save();
    }

  
    editRecipie(editRecipie: Recipie): void {
        const recipies = this.recipies.value.slice();
        const index = recipies.findIndex(c => c.name === editRecipie.name);
        recipies[index] = editRecipie;
        this.recipies.next(recipies);
        this.save();
    }

    save(): void {
        this.http.put('https://mon-projet-cf3d9.firebaseio.com/recipies.json', this.recipies.value).subscribe();
    }

}
