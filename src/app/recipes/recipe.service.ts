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
            'https://c.pxhere.com/photos/8c/ab/beef_bread_bun_burger_calories_cheese_cheeseburger_close_up-1546505.jpg!d',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]),
        new Recipe(
            'Kebbab', 
            'Something about this recipe!',
            'https://c.pxhere.com/photos/00/56/tacos_mexican_carne_asada_food_plate_meal_cuisine_delicious-1111303.jpg!d',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 15)
            ]),
        new Recipe(
            'Noodles', 
            'A super tasty recipe!',
            'https://c.pxhere.com/photos/da/c4/spaghetti_tomatoes_tomato_sauce_pasta_italian_noodles_ingredient_carbohydrates-624689.jpg!d',
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

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredientsFromRecipe(ingredients);
      }
}