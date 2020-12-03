import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoursesComponent} from './courses/courses.component';
import {AddCourseComponent} from './courses/add-course/add-course.component';
import {AuthGuard} from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full'},
  { path: 'courses', 
    children: [
      {path: '', component: CoursesComponent},
      {path: 'new', component: AddCourseComponent, data: {action: 'add'}, canActivate: [AuthGuard]},
      {path: ':id', component: AddCourseComponent, data: {action: 'edit'}, canActivate: [AuthGuard]},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
