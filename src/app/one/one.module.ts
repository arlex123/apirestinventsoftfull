import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneRoutingModule } from './one-routing.module';
import { OneListComponent } from './one-list/one-list.component';


@NgModule({
  declarations: [OneListComponent],
  imports: [
    CommonModule,
    OneRoutingModule
  ]
})
export class OneModule { }
