import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';

import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;
  recipeForm: UntypedFormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params.id;
          this.editMode = !!this.id;
          this.initForm();
        }
      );
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    const recipeIngredients = new UntypedFormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipeByID(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;

      if (recipe.ingredients) {
        for (const ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new UntypedFormGroup({

              name: new UntypedFormControl(ingredient.name, Validators.required),
              amount: new UntypedFormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.recipeForm = new UntypedFormGroup({
      name: new UntypedFormControl(recipeName, Validators.required),
      imagePath: new UntypedFormControl(recipeImagePath, Validators.required),
      description: new UntypedFormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients
    });
  }

  onAddIngredient() {
    (this.recipeForm.get('ingredients') as UntypedFormArray).push(
      new UntypedFormGroup({
        name: new UntypedFormControl(null, Validators.required),
        amount: new UntypedFormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  get controls() { // a getter!
    return (this.recipeForm.get('ingredients') as UntypedFormArray).controls;
  }

  onSubmit() {
    console.log('SUBMITTED');
    let length: number;
    // const newRecipe = new Recipe(
    //   this.recipeForm.get('name').value,
    //   this.recipeForm.get('imagePath').value,
    //   this.recipeForm.get('description').value,
    //   this.recipeForm.get('ingredients').value
    // );
    // Because he have the same structure of information
    // in our form as the structure of the Recipe class we.
    // We can skip the creation of a new constant and pass
    // directly the value of the form.
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
      // this.router.navigate(['/recipes', this.id]);
    } else {
      length = this.recipeService.addRecipe(this.recipeForm.value);
      // this.router.navigate(['/recipes', length]);
    }
    this.onCancel(length);
  }

  onCancel(index: number = 0) {
    if (this.editMode) {
      this.router.navigate(['../'], {relativeTo: this.route});
    } else {
      this.router.navigate(['../', index], {relativeTo: this.route});
    }
  }

  onDeleteIngredient(index: number) {
    (this.recipeForm.get('ingredients') as UntypedFormArray).removeAt(index);
  }
}
