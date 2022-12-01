import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Tasty Schnitzel',
  //     'A super-tasty Schnitzel - just awesome',
  //     // tslint:disable-next-line:max-line-length
  //     'https://steemitimages.com/p/o1AJ9qDyyJNSpZWhUgGYc3MngFqoAMfAtHcWN7TdVVgaqxn1U?format=match&mode=fit&width=640',
  //     [
  //       new Ingredient('Meat', 1),
  //       new Ingredient('French freeze', 20)
  //     ]),
  //   new Recipe(
  //     'Big Fat Burger',
  //     'What else you need to say?',
  //     // tslint:disable-next-line:max-line-length
  //     'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/5/5/0/FNM_060115-Fatbuger-Recipe_s4x3.jpg.rend.hgtvcom.
  //     7826.620.suffix/1431449537270.jpeg',
  //     [
  //       new Ingredient('Buns', 2),
  //       new Ingredient('Meat', 1)
  //     ]),
  //   new Recipe(
  //     'Kek Shtëpie',
  //     'Kek shtëpie me kos, receta e shijshme dhe me pak shpenzime',
  //     // tslint:disable-next-line:max-line-length
  //     'https://tirananews.al/wp-content/uploads/2019/05/Kek.jpg',
  //     [
  //       new Ingredient('Veze', 2),
  //       new Ingredient('Sode Buke', 1)
  //     ])
  // ];

  private recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService) {
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    // when we return theArray.slice() with no arguments
    // we are returning a copy of theArray. Because we don't
    // want to access it directly.
    return this.recipes.slice();
  }

  getRecipeByName(name: string) {
    for (const recipe of this.recipes) {
      if (recipe.name === name) {
        return recipe;
      }
    }
    return null;
  }

  getRecipeByID(id: number): Recipe {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe): number {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
    return this.recipes.length - 1;
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
