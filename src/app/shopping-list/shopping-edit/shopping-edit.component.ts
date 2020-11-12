import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';

import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import * as ShoppingListActions from '../store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false})
  slForm: NgForm;

  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editItem: Ingredient;

  constructor(
    private shoppingListService: ShoppingListService,
    private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>
  ) {
  }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe((index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editItem = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        });
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      // this.shoppingListService.addIngredient(newIngredient);
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }

    this.onClear();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
}
