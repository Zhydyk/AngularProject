import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseAuthorsComponent } from './course-authors.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [CourseAuthorsComponent],
  exports: [CourseAuthorsComponent],
})

export class CourseAuthorsModule {}