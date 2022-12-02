import {NgModule} from '@angular/core';
import {CommonModule, DATE_PIPE_DEFAULT_TIMEZONE} from '@angular/common';

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
  providers: [
    // { TODO Try to fix the format by default
    //   provide: DATE_PIPE_DEFAULT_TIMEZONE,
    //   useValue: {dateFormat: 'dd:MM:yyyy', timezone: 'WET'}
    // }
  ]
})
export class ShareModule {

}
