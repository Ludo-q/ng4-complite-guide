import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {map, switchMap} from 'rxjs/operators';

import {Recipe} from '../recipe.model';
import * as fromApp from '../../store/app.reducer';
import * as RecipeActions from '../store/recipe.actions';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';

@Component({
  selector: '<app-recipe-detail>',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})

export class RecipeDetailComponent implements OnInit {

  selectedRecipe: Recipe;
  indexSelectedRecipe: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {
  }

  ngOnInit() {
    this.route.params.pipe(
      map(params => {
        return +params.id;
      }),
      switchMap(id => {
        this.indexSelectedRecipe = id;
        return this.store.select('recipe');
      }),
      map((recipesState) => {
        return recipesState.recipes.find((recipe, index) => {
          return index === this.indexSelectedRecipe;
        });
      })
    ).subscribe(recipe => {
      this.selectedRecipe = recipe;
    });
  }

  onAddToShoppingList() {
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.selectedRecipe.ingredients));
  }

  onRecipeEdit() {
    this.router.navigate(['../', this.indexSelectedRecipe, 'edit'], {relativeTo: this.route});
    // this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['/recipes', this.indexSelectedRecipe, 'edit']);
  }

  onRecipeDelete() {
    this.store.dispatch(new RecipeActions.DeleteRecipe(this.indexSelectedRecipe));
    this.router.navigate(['/recipes']);
  }
}
