import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';

import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[];
  subscription: Subscription;

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  // Creation
  customObs = new Observable<number>((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
  }).pipe(
    map(res => res * 2),
    map(res => console.log(`Observable transform: ${res}`))
  );

  customPro = new Promise<number>((resolve, reject) => {
    resolve(2);
    resolve(3);
    resolve(4);
  });

  subCustomObs: Subscription;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.subCustomObs = this.customObs.subscribe();
    this.customPro.then(res => {
      console.log(`Promise transform: ${res * 2}`);
    });
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subCustomObs.unsubscribe();
  }
}
