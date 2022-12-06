import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsExamplesRoutingModule } from './rxjs-examples-routing.module';
import { RxjsExamplesComponent } from './rxjs-examples.component';
import { CreationOperatorsComponent } from './creation-operators/creation-operators.component';


@NgModule({
  declarations: [
    RxjsExamplesComponent,
    CreationOperatorsComponent
  ],
  imports: [
    CommonModule,
    RxjsExamplesRoutingModule
  ]
})
export class RxjsExamplesModule { }
