import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test recepi 2', 'This is simple a test',
      // tslint:disable-next-line:max-line-length
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872'),
    new Recipe('Test recepi 3', 'This is simple a test',
      // tslint:disable-next-line:max-line-length
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bean-recipes-1.jpg')
  ];

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  getSelectedRecipe(selectedRecipe) {
    this.selectedRecipe.emit(selectedRecipe);
    console.log(selectedRecipe.name);
  }
}
