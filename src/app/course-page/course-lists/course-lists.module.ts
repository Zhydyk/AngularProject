import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CourseListsComponent } from './course-lists.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CourseListsComponent],
  exports: [CourseListsComponent],
})
export class CourseListsModule {}
