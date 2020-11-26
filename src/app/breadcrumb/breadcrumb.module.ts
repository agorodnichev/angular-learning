import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BreadcrumbComponent} from './breadcrumb.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    BreadcrumbComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
  ],
  exports: [
    BreadcrumbComponent,
  ],
  providers: [],
})
export class BreadcrumbModule { }
