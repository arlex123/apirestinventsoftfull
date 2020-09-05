import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThreeRoutingModule } from './three-routing.module';
import { ThreeListComponent } from './three-list/three-list.component';


@NgModule({
  declarations: [ThreeListComponent],
  imports: [
    CommonModule,
    ThreeRoutingModule
  ]
})
export class ThreeModule { }
