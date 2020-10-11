import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { LogoComponent } from './logo/logo.component';
import { AuthButtonComponent } from './auth-button/auth-button.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    AuthButtonComponent,
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    HeaderComponent,
  ],
  providers: [],
})
export class HeaderModule {}
