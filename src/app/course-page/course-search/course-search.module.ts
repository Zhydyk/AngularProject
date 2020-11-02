import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CourseSearchComponent } from './course-search.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CourseSearchComponent],
  exports: [CourseSearchComponent],
})
export class CourseSearchModule {}
