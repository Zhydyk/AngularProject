import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursePageModule } from './course-page/course-page.module';
import { FormsModule } from '@angular/forms';
import { LoginPageModule } from './login-page/login-page.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
