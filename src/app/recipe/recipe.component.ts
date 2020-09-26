import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: '<app-recipe>',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input() pushInSelectedItem: Recipe;
  @Output() pullOutSelectedItem = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit() {
  }

  getSelectedRecipe(selectedRecipe: Recipe) {
    this.pullOutSelectedItem.emit(selectedRecipe);
    this.pushInSelectedItem = selectedRecipe;
    console.log('From recipe.component: ' + selectedRecipe.name);
  }
}
