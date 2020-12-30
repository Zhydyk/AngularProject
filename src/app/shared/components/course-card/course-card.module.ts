import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DurationPipeModule } from '../../pipes/duration/duration.module';
import { CourseCardComponent } from './course-card.component';

@NgModule({
  imports: [CommonModule, DurationPipeModule, RouterModule],
  declarations: [CourseCardComponent],
  exports: [CourseCardComponent],
})
export class CourseCardModule {}
