import {EventEmitter, Injectable} from '@angular/core';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome',
      // tslint:disable-next-line:max-line-length
      'https://steemitimages.com/p/o1AJ9qDyyJNSpZWhUgGYc3MngFqoAMfAtHcWN7TdVVgaqxn1U?format=match&mode=fit&width=640',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French freeze', 20)
      ]),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      // tslint:disable-next-line:max-line-length
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/5/5/0/FNM_060115-Fatbuger-Recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1431449537270.jpeg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    // when we return theArray.slice() with no arguments
    // we are returning a copy of theArray. Because we don't
    // want to access it directly.
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
