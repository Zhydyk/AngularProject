import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CourseCardModule } from 'src/app/shared/components/course-card/course-card.module';
import { CoursePlateDirective } from 'src/app/shared/directives';
import { OrderByPipe } from 'src/app/shared/order-by.pipe';
import { CourseListsComponent } from './course-lists.component';

@NgModule({
  imports: [CommonModule, CourseCardModule],
  declarations: [CourseListsComponent, CoursePlateDirective, OrderByPipe],
  exports: [CourseListsComponent],
})
export class CourseListsModule {}
