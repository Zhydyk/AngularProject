import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CourseAuthorsComponent } from './course-authors.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule],
  declarations: [CourseAuthorsComponent],
  exports: [CourseAuthorsComponent],
})

export class CourseAuthorsModule {}