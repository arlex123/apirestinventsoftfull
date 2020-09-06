import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneRoutingModule } from './one-routing.module';
import { OneListComponent } from './one-list/one-list.component';

//import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [OneListComponent],
  imports: [
    CommonModule,
    OneRoutingModule,
    //BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: []
})
export class OneModule { }
