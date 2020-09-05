import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwoListComponent } from './two-list/two-list.component';

const routes: Routes = [
  {
    path: '',
    component: TwoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwoRoutingModule { }
