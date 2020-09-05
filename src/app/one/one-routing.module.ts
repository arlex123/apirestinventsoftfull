import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneListComponent } from './one-list/one-list.component';

const routes: Routes = [
  {
    path: '',
    component: OneListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OneRoutingModule { }
