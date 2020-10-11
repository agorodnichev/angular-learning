import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';

@NgModule({
  declarations: [
    SearchComponent,
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    SearchComponent,
  ],
  providers: [],
})
export class FooterModule { }
