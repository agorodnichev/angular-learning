import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [
    UserComponent,
  ],
  providers: [],
})
export class UserModule { }
