import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: '<app-recipe-detail>',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})

export class RecipeDetailComponent implements OnInit {

  selectedRecipe: Recipe;
  indexSelectedRecipe: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.indexSelectedRecipe = +params.id;
          this.selectedRecipe = this.recipeService.getRecipeByID(this.indexSelectedRecipe);
        }
      );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.selectedRecipe.ingredients);
  }

  onRecipeEdit() {
    this.router.navigate(['../', this.indexSelectedRecipe, 'edit'], {relativeTo: this.route});
    // this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['/recipes', this.indexSelectedRecipe, 'edit']);
  }
}
