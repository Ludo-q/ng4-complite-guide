import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AuthComponent} from './auth.component';
import {RouterModule} from '@angular/router';
import {ShareModule} from '../shared/share.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: AuthComponent}]),
    ShareModule,
  ],
})
export class AuthModule {

}
