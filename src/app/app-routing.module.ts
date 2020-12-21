import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursePageComponent } from './course-page/course-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NewCoursePageComponent } from './new-course-page/new-course-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', component: CoursePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'new-course', component: NewCoursePageComponent },
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
