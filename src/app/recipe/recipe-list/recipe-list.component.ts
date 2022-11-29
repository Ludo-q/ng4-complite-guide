import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {fromEvent, Observable, Subscription} from 'rxjs';

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

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );

    const btnPromise = document.getElementById('btn-promise');
    const btnObs = document.getElementById('btn-observable');

    const inPromise = document.getElementById('in-promise');
    const inObs = document.getElementById('in-observable');


    function handler(e) {
      console.log(`Clicked Promise: `, e);
    }

    // setup and listening promise
    btnPromise.addEventListener('click', handler);

    // setup observable
    const click$ = fromEvent(btnObs, 'click');
    // listening observable
    const subscriptionBtn = click$.subscribe(e => console.log('Clicked Observable: ', e));

    // configuration observable
    const input$ = fromEvent(inObs, 'keydown').pipe(map(e => (e.target as HTMLInputElement).value));

    const subscriptionIn = input$.subscribe(target => console.log('Observable Input Value: ', target));

    // configuration observable (is not possible before the handler)
    function handlerIn(e) {
      console.log('Promise Input Value: ', e.target.value);
    }

    inPromise.addEventListener('keydown', handlerIn);


    // remove listening to Promise & Observable

    setTimeout(() => {
      btnPromise.removeEventListener('click', handler);
      inPromise.removeEventListener('keydown', handlerIn);
      subscriptionBtn.unsubscribe();
      subscriptionIn.unsubscribe();
    }, 10000);

  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
