import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbsModule } from '../shared/components/breadcrumbs/breadcrumbs.module';
import { FooterModule } from '../shared/components/footer/footer.module';
import { HeaderModule } from '../shared/components/header/header.module';
import { LoginButtonsModule } from '../shared/components/login-buttons/login-buttons.module';
import { SpinnerModule } from '../shared/components/spinner/spinner.module';
import { NewCourseFormsModule } from './new-course-forms/new-course-forms.module';
import { NewCoursePageComponent } from './new-course-page.component';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    BreadcrumbsModule,
    NewCourseFormsModule,
    LoginButtonsModule,
    RouterModule,
    SpinnerModule,
  ],
  declarations: [NewCoursePageComponent],
  exports: [NewCoursePageComponent],
})
export class NewCoursePageModule {}
