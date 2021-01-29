import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AuthStoreModule } from './modules/auth-store.module';
import { AuthorStoreModule } from './modules/author.module';
import { CourseStoreModule } from './modules/course-store.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    AuthStoreModule,
    CourseStoreModule,
    AuthorStoreModule,
  ],
})
export class RootStoreModule {}
