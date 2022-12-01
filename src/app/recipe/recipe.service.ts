import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {RECIPE_MAP_DATA, RECIPE_OBJ_DATA} from './recipe.data.dummy';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  // recipesChanged = new Subject<Recipe[]>();
  // recipesChanged = new Subject<{ [key: number]: Recipe }>();
  recipesChanged = new Subject<Map<number, Recipe>>();
  // private recipes: Recipe[] = [];
  // private recipes: { [key: number]: Recipe } = RECIPE_OBJ_DATA;
  private recipes: Map<number, Recipe> = RECIPE_MAP_DATA;

  constructor(private shoppingListService: ShoppingListService) {
  }

  // setRecipes(recipes: { [key: number]: Recipe }) {
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes.reduce((previousValue, currentValue, index) => {
      return  previousValue.set(index, currentValue);
    }, new Map<number, Recipe>());
    // this.recipesChanged.next(this.recipes.slice());
    // this.recipesChanged.next({...this.recipes});
    this.recipesChanged.next(new Map(this.recipes));
  }

  getRecipes() {
    // when we return theArray.slice() with no arguments
    // we are returning a copy of theArray. Because we don't
    // want to access it directly.
    // return this.recipes.slice();
    // this.recipesChanged.next({...this.recipes});
    this.recipesChanged.next(new Map(this.recipes));
    return {...this.recipes};
  }

  getRecipeByName(name: string) {
    // for (const recipe of this.recipes) {
    //   if (recipe.name === name) {
    //     return recipe;
    //   }
    // }
    for (const recipe of Object.entries(this.recipes)) {
      if (recipe[1].name === name) {
        return recipe;
      }
    }
    return null;
  }

  getRecipeByID(id: number): Recipe {
    // return this.recipes[id];
    return this.recipes.get(id);
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe): number {
    // this.recipes.push(recipe);
    const len = Object.keys(this.recipes).length;
    this.recipes[len - 1] = recipe;

    // this.recipesChanged.next(this.recipes.slice());
    // this.recipesChanged.next({...this.recipes});
    this.recipesChanged.next(new Map(this.recipes));

    // return this.recipes.length - 1;
    return len;
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    // this.recipesChanged.next(this.recipes.slice());
    // this.recipesChanged.next({...this.recipes});
    this.recipesChanged.next(new Map(this.recipes));
  }

  deleteRecipe(index: number) {
    // this.recipes.splice(index, 1);
    delete this.recipes[index];

    // this.recipesChanged.next(this.recipes.slice());
    // this.recipesChanged.next({...this.recipes});
    this.recipesChanged.next(new Map(this.recipes));
  }
}
