import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DurationPipe } from '../../duration.pipe';
import { CourseCardComponent } from './course-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CourseCardComponent, DurationPipe],
  exports: [CourseCardComponent],
})
export class CourseCardModule {}
