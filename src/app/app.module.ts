import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// app modules
import { AppRoutingModule } from './app-routing.module';
import { CoursesModule } from './courses/courses.module';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { UserModule } from './user/user.module';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    BreadcrumbModule,
    HeaderModule,
    FooterModule,
    UserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
