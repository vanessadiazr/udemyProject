import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Burguer', 
            'recipe 1 description',
            'https://guiadacozinha.com.br/wp-content/uploads/2018/06/hamburguer-mexicano-768x512.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]),
        new Recipe(
            'Lasagna', 
            'Something about this recipe!',
            'https://guiadacozinha.com.br/wp-content/uploads/2017/01/lasanha-calabresa-catupiry-768x512.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 15)
            ]),
        new Recipe(
            'Noodles', 
            'A super tasty recipe!',
            'https://guiadacozinha.com.br/wp-content/uploads/2018/10/culinaria-tailandesa-768x512.jpg',
            [
                new Ingredient('Noodles', 1),
                new Ingredient('Cheese', 1)
            ]),
      ];

      constructor(private shoppingListService: ShoppingListService){}
    
      getRecipes(){
        //slice returns a exact copy of the array not the array it self
        return this.recipes.slice();
      }

      getRecipe(index: number){
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredientsFromRecipe(ingredients);
      }
}