import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbsModule } from '../shared/components/breadcrumbs/breadcrumbs.module';
import { DeleteModalModule } from '../shared/components/delete-modal/delete-modal.module';
import { HeaderModule } from '../shared/components/header/header.module';
import { LoginButtonsModule } from '../shared/components/login-buttons/login-buttons.module';
import { SpinnerModule } from '../shared/components/spinner/spinner.module';
import { CourseListsModule } from './course-lists/course-lists.module';
import { CoursePageRoutingModule } from './course-page-routing.module';
import { CoursePageComponent } from './course-page.component';
import { CourseSearchModule } from './course-search/course-search.module';

@NgModule({
  imports: [
    CommonModule,
    CourseSearchModule,
    CourseListsModule,
    HeaderModule,
    LoginButtonsModule,
    DeleteModalModule,
    BreadcrumbsModule,
    CoursePageRoutingModule,
    SpinnerModule,
  ],
  declarations: [CoursePageComponent],
  exports: [CoursePageComponent],
})
export class CoursePageModule {}
