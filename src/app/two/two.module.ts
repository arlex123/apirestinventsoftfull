import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoRoutingModule } from './two-routing.module';
import { TwoListComponent } from './two-list/two-list.component';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [TwoListComponent],
  imports: [
    CommonModule,
    TwoRoutingModule,
    //BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: []
})
export class TwoModule { }
