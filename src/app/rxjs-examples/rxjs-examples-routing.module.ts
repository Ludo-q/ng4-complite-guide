import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsExamplesComponent } from './rxjs-examples.component';

const routes: Routes = [{ path: '', component: RxjsExamplesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsExamplesRoutingModule { }
