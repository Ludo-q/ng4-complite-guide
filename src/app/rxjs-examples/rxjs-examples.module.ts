import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsExamplesRoutingModule } from './rxjs-examples-routing.module';
import { RxjsExamplesComponent } from './rxjs-examples.component';


@NgModule({
  declarations: [
    RxjsExamplesComponent
  ],
  imports: [
    CommonModule,
    RxjsExamplesRoutingModule
  ]
})
export class RxjsExamplesModule { }
