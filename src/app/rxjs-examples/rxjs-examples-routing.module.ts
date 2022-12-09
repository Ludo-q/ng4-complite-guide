import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RxjsExamplesComponent} from './rxjs-examples.component';
import {CreationOperatorsComponent} from './creation-operators/creation-operators.component';
import {JoinCreationOperatorsComponent} from './join-creation-operators/join-creation-operators.component';

const routes: Routes = [
  {
    path: '',
    title: 'RXJS Examples',
    component: RxjsExamplesComponent,
    children: [
      {
        path: 'creation-operators',
        title: 'Creation Operators',
        component: CreationOperatorsComponent,
      },
      {
        path: 'join-creation-operators',
        title: 'Join Creation Operators',
        component: JoinCreationOperatorsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsExamplesRoutingModule {
}
