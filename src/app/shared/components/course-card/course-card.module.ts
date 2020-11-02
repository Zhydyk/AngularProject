import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CourseCardComponent } from './course-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CourseCardComponent],
  exports: [CourseCardComponent],
})
export class CourseCardModule {}
