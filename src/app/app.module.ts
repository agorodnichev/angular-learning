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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './shared/interceptors/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import { StoreModule } from '@ngrx/store';
import { isAuthReducer } from './shared/stores/auth/auth.reducer';
import { setNewCoursesListReducer } from './courses/shared/stores/courses-list/courses-list.reducer';

@NgModule({
  declarations: [
    AppComponent,
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
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    StoreModule.forRoot(
      { isAuth: isAuthReducer,
        coursesList: setNewCoursesListReducer }
    )
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
