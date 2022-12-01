import {Pipe, PipeTransform} from '@angular/core';
import {Recipe} from '../recipe/recipe.model';

@Pipe({
  name: 'truncateByChar'
})
export class TruncateByCharPipe implements PipeTransform {

  transform(value: any, limit: number): any {
    if (value.length > limit) {
      return value.substring(0, limit) + ' ...';
    }

    return value;
  }

}

@Pipe({
  name: 'truncateByWord'
})
export class TruncateByWordPipe implements PipeTransform {
  transform(value: string, displayFirstWords: number = 10): string {
    return value.split(' ').slice(0, displayFirstWords).join(' ') + '...';
  }
}

@Pipe({
  name: 'recipeByIngredient'
})
export class RecipeByIngredientsPipe implements PipeTransform {
  transform(value: Recipe[], minIngredient: number = 2): Recipe[] {
    return value.filter(recipe => recipe.ingredients.length > minIngredient);
  }
}
