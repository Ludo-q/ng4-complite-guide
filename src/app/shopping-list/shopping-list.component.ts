import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';

import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: '<app-shopping-list>',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Observable<{ingredients: Ingredient[]}>;
  private subscription: Subscription;

  constructor(
    private shoppingListService: ShoppingListService,
    private store: Store<{shoppingList: {ingredients: Ingredient[]}}>
  ) {
  }

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }
}
