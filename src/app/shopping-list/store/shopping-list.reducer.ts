import {Ingredient} from '../../shared/ingredient.model';

import * as ShoppingListActions from './shopping-list.actions';

const initialState = {
  ingredients: [
    new Ingredient('Molle', 50),
    new Ingredient('Banane', 100),
    new Ingredient('Qershi', 200),
  ]
};

export function shoppingListReducer(
  state = initialState,
  action: ShoppingListActions.AddIngredient
) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    default:
      return state;
  }
}
