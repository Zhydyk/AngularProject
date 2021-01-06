import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursePageModule } from './course-page/course-page.module';
import { FormsModule } from '@angular/forms';
import { LoginPageModule } from './login-page/login-page.module';
import { NewCoursePageModule } from './new-course-page/new-course-page.module';
import { FooterModule } from './shared/components/footer/footer.module';
import { HeaderModule } from './shared/components/header/header.module';
import { NewCourseFormsModule } from './new-course-page/new-course-forms/new-course-forms.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursePageModule,
    FormsModule,
    LoginPageModule,
    NewCoursePageModule,
    FooterModule,
    HeaderModule,
    NewCourseFormsModule,
    PageNotFoundModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
