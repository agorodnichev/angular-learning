import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoursesComponent} from './courses/courses.component';
import {AddCourseComponent} from './courses/add-course/add-course.component';
import {AuthGuard} from './shared/guards/auth.guard';
// import {UserComponent} from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full'},
  { path: 'courses', 
    canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    children: [
      {path: '', component: CoursesComponent},
      {path: 'new', component: AddCourseComponent, data: {action: 'add'}},
      {path: ':id', component: AddCourseComponent, data: {action: 'edit'}},
    ]
  },
  // {path: '**', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
