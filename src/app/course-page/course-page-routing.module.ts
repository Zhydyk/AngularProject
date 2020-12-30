import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewCoursePageComponent } from "../new-course-page/new-course-page.component";
import { CoursePageComponent } from "./course-page.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CoursePageComponent,
      },
      {
        path: 'new',
        component: NewCoursePageComponent,
      },
      {
        path: ':id',
        component: NewCoursePageComponent,
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class CoursePageRoutingModule {}