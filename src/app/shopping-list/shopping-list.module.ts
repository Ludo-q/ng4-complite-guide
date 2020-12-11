import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {ShoppingListComponent} from './shopping-list.component';
import {ShoppingEditComponent} from './shopping-edit/shopping-edit.component';
import {ShareModule} from '../shared/share.module';
import {LoggingService} from '../logging.service';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    FormsModule,
    RouterModule.forChild([
      {path: '', component: ShoppingListComponent},
    ]),
    ShareModule,
  ],
  // providers: [LoggingService]
})
export class ShoppingListModule {

}
