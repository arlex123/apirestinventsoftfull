import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThreeRoutingModule } from './three-routing.module';
import { ThreeListComponent } from './three-list/three-list.component';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ThreeListComponent],
  imports: [
    CommonModule,
    ThreeRoutingModule,
    //BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: []
})
export class ThreeModule { }
