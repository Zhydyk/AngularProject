import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CourseAuthorsModule } from 'src/app/shared/components/course-authors/course-authors.module';
import { CourseDateModule } from 'src/app/shared/components/course-date/course-date.module';
import { CourseDurationModule } from 'src/app/shared/components/course-duration/course-duration.module';
import { NewCourseFormsComponent } from './new-course-forms.component';

@NgModule({
  imports: [
    CommonModule,
    CourseAuthorsModule,
    CourseDateModule,
    CourseDurationModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [NewCourseFormsComponent],
  exports: [NewCourseFormsComponent],
})
export class NewCourseFormsModule {}
