import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CourseAuthorsModule } from 'src/app/shared/components/course-authors/course-authors.module';
import { CourseDateModule } from 'src/app/shared/components/course-date/course-date.module';
import { CourseDurationModule } from 'src/app/shared/components/course-duration/course-duration.module';
import { SubmitButtonsModule } from 'src/app/shared/components/submit-buttons/submit-buttons.module';
import { NewCourseFormsComponent } from './new-course-forms.component';

@NgModule({
  imports: [CommonModule, CourseAuthorsModule, CourseDateModule, CourseDurationModule, SubmitButtonsModule],
  declarations: [NewCourseFormsComponent],
  exports: [NewCourseFormsComponent],
})
export class NewCourseFormsModule {}
