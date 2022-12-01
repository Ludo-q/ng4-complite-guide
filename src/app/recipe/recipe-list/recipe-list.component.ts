import {AfterViewInit, ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';

import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {RECIPE_OBJ_DATA} from '../recipe.data.dummy';
import {KeyValue} from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, AfterViewInit, OnDestroy {

  // recipes$: Observable<Recipe[]>;
  // recipes$: Observable<{ [key: number]: Recipe }>;
  recipes$: Observable<Map<number, Recipe>>;
  // recipes$: Observable<Map<number, Recipe>>;
  subscription: Subscription;

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute,
    private changeDetector: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.recipes$ = this.recipeService.recipesChanged;
  }

  ngAfterViewInit() {
    // This is not too much implicit
    // Promise.resolve().then(() => this.recipeService.getRecipes());

    this.recipeService.getRecipes();
    this.changeDetector.detectChanges();
  }

  orderByRecipeName(a: KeyValue<number, Recipe>, b: KeyValue<number, Recipe>): number {
    return a.value.name > b.value.name ? 1 : (a.value.name < b.value.name ? -1 : 0);
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
