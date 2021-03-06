import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DurationPipeModule } from '../../pipes/duration/duration.module';
import { CourseDurationComponent } from './course-duration.component';

@NgModule({
  imports: [CommonModule, FormsModule, DurationPipeModule, ReactiveFormsModule, TranslateModule],
  declarations: [CourseDurationComponent],
  exports: [CourseDurationComponent],
})

export class CourseDurationModule {}