import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoRoutingModule } from './two-routing.module';
import { TwoListComponent } from './two-list/two-list.component';


@NgModule({
  declarations: [TwoListComponent],
  imports: [
    CommonModule,
    TwoRoutingModule
  ]
})
export class TwoModule { }
