import {EventEmitter} from '@angular/core';

import {Recipe} from './recipe.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test recepi 2', 'This is simple a test',
      // tslint:disable-next-line:max-line-length
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872'),
    new Recipe('Test recepi 3', 'This is simple a test',
      // tslint:disable-next-line:max-line-length
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bean-recipes-1.jpg')
  ];

  getRecipes() {
    // when we return theArray.slice() with no arguments
    // we are returning a copy of theArray. Because we don't
    // want to access it directly.
    return this.recipes.slice();
  }
}
