import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {RecipeComponent} from './recipe.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeItemComponent} from './recipe-list/recipe-item/recipe-item.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipeRoutingModule} from './recipe-routing.module';
import {ShareModule} from '../shared/share.module';

@NgModule({
  declarations: [
    RecipeComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    ReactiveFormsModule,
    RecipeRoutingModule,
    ShareModule,
  ],
})
export class RecipeModule {
}
