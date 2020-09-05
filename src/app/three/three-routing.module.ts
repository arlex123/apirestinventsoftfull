import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThreeListComponent } from './three-list/three-list.component';

const routes: Routes = [
  {
    path: '',
    component: ThreeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThreeRoutingModule { }
