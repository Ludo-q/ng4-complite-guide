import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AlertComponent} from './alert/alert.component';
import {LoadingSpinnerComponent} from './loading-spinner/loading-spinner.component';
import {PlaceholderDirective} from './placeholder/placeholder.directive';
import {DropdownDirective} from './dropdown.derective';
import {LoggingService} from '../logging.service';
import {RecipeByIngredientsPipe, TruncateByCharPipe, TruncateByWordPipe} from './pipe-custom.pipe';

@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
    TruncateByCharPipe,
    TruncateByWordPipe,
    RecipeByIngredientsPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
    CommonModule,
    TruncateByCharPipe,
    TruncateByWordPipe,
    RecipeByIngredientsPipe,
  ],
  providers: [LoggingService]
})
export class ShareModule {

}
