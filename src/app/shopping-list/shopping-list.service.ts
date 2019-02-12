import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{

    //with the slice() you pass a copy of the ingredients 
    //when you use a copy of it, so you have to emit this when it is 
    //updated
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];
    
    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredientsFromRecipe(ingredients: Ingredient[]){
        //for(let ingredient of ingredients){
          // this.addIngredient(ingredient);  
        //} or:
        //turn an array of elements into a list of elements:
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}