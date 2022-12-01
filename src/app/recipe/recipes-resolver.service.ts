import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {Recipe} from './recipe.model';
import {DataStorageService} from '../shared/data-storage.service';
import {RecipeService} from './recipe.service';

@Injectable({providedIn: 'root'})
// export class RecipesResolverService implements Resolve<Recipe[]> {
export class RecipesResolverService implements Resolve<{ [key: number]: Recipe }> {
  constructor(
    private dataStorageService: DataStorageService,
    private recipesService: RecipeService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipesService.getRecipes();

    // if (recipes.length === 0) {
    // if (Object.keys(recipes).length === 0) {
    if (recipes.size === 0) {
      return this.dataStorageService.fetchRecipes();
    } else {
      return recipes;
    }

    // return this.dataStorageService.fetchRecipes();
  }
}
