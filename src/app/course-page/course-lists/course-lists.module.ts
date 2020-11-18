import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CourseCardModule } from 'src/app/shared/components/course-card/course-card.module';
import { CourseListsComponent } from './course-lists.component';

@NgModule({
  imports: [CommonModule, CourseCardModule],
  declarations: [CourseListsComponent],
  exports: [CourseListsComponent],
})
export class CourseListsModule {}
