import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { CourseListsComponent } from './course-lists/course-lists.component';
import { CoursePageComponent } from './course-page.component';
import { CourseSearchComponent } from './course-search/course-search.component';

@NgModule({
  imports: [SharedModule],
  declarations: [CourseSearchComponent, CourseListsComponent, CoursePageComponent],
  exports: [CourseSearchComponent, CourseListsComponent, CoursePageComponent],
})
export class CoursePageModule {}
