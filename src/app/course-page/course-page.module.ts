import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterModule } from '../shared/components/footer/footer.module';
import { HeaderModule } from '../shared/components/header/header.module';
import { CourseListsModule } from './course-lists/course-lists.module';
import { CoursePageComponent } from './course-page.component';
import { CourseSearchModule } from './course-search/course-search.module';

@NgModule({
  imports: [
    CommonModule,
    CourseSearchModule,
    CourseListsModule,
    HeaderModule,
    FooterModule,
  ],
  declarations: [CoursePageComponent],
  exports: [CoursePageComponent],
})
export class CoursePageModule {}