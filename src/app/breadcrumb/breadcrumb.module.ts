import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BreadcrumbComponent} from './breadcrumb.component';


@NgModule({
  declarations: [
    BreadcrumbComponent,
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    BreadcrumbComponent,
  ],
  providers: [],
})
export class BreadcrumbModule { }
