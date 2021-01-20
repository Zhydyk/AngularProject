import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CourseEffects } from '../effects/course.effects';
import { courseReducer } from '../reducers/couse.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('courses', courseReducer),
    EffectsModule.forFeature([CourseEffects]),
  ],
})
export class CourseStoreModule {}
