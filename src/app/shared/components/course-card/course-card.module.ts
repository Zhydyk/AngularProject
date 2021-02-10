import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DurationPipeModule } from '../../pipes/duration/duration.module';
import { DeleteModalModule } from '../delete-modal/delete-modal.module';
import { CourseCardComponent } from './course-card.component';

@NgModule({
  imports: [
    CommonModule,
    DurationPipeModule,
    RouterModule,
    DeleteModalModule,
    TranslateModule,
  ],
  declarations: [CourseCardComponent],
  exports: [CourseCardComponent],
})
export class CourseCardModule {}
