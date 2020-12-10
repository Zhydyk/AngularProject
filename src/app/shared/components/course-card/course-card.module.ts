import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DurationPipeModule } from '../../pipes/duration/duration.module';
import { CourseCardComponent } from './course-card.component';

@NgModule({
  imports: [CommonModule, DurationPipeModule],
  declarations: [CourseCardComponent],
  exports: [CourseCardComponent],
})
export class CourseCardModule {}
