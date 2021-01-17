import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursePageModule } from './course-page/course-page.module';
import { LoginPageModule } from './login-page/login-page.module';
import { NewCoursePageModule } from './new-course-page/new-course-page.module';
import { FooterModule } from './shared/components/footer/footer.module';
import { HeaderModule } from './shared/components/header/header.module';
import { NewCourseFormsModule } from './new-course-page/new-course-forms/new-course-forms.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { SpinnerModule } from './shared/components/spinner/spinner.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AuthEffects } from './store/effects/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/app.states';

@NgModule({
  declarations: [AppComponent],
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
    HttpClientModule,
    SpinnerModule,
    StoreModule.forRoot(
      reducers,
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
