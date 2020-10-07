import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RecipeComponent} from './recipe/recipe.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeDetailComponent} from './recipe/recipe-detail/recipe-detail.component';
import {RecipeStartComponent} from './recipe/recipe-start/recipe-start.component';


const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {
    path: 'recipes',
    component: RecipeComponent,
    children: [
      {path: '', component: RecipeStartComponent},
      {path: ':id', component: RecipeDetailComponent}
      // {path: 'message', component: DisplayMessageComponent},
      // {path: ':name', component: RecipeDetailComponent},
    ]
  },
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
