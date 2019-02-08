import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Frigles 1', 'a descrição',
    'https://get.pxhere.com/photo/dish-meal-food-produce-recipe-fish-breakfast-meat-pork-cuisine-steak-pork-chop-power-dishes-grilling-fried-food-604134.jpg'),

    new Recipe('Frigles 2', 'a descrição',
    'https://www.maxpixel.net/static/photo/1x/Food-Kitchen-Meals-Home-Made-Dishes-Recipe-Bio-1175493.jpg'),

    new Recipe('Frigles 3', 'a descrição',
    'https://get.pxhere.com/photo/food-cuisine-thai-chili-spicy-vegetable-herb-meat-gourmet-ingredient-sauce-recipe-pepper-delicious-salad-curry-thailand-hot-culture-dinner-dish-restaurant-meal-rice-healthy-appetizer-cooking-lunch-eat-asia-thai-food-vegetarian-food-asian-food-phat-si-io-chinese-food-southeast-asian-food-leaf-vegetable-chow-mein-char-kway-teow-pad-thai-1440945.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
