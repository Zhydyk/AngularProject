import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DurationPipeModule } from '../../pipes/duration/duration.module';
import { CourseDurationComponent } from './course-duration.component';

@NgModule({
  imports: [CommonModule, FormsModule, DurationPipeModule],
  declarations: [CourseDurationComponent],
  exports: [CourseDurationComponent],
})

export class CourseDurationModule {}