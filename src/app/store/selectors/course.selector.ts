import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Courses } from 'src/app/models/course.interface';
import { AppState } from '../app.states';
import { CourseState } from '../reducers/couse.reducer';

export const selectFeatureCourse = createFeatureSelector<AppState, CourseState>(
  'courses'
);
export const selectCourses = createSelector(
  selectFeatureCourse,
  (state: CourseState): Courses[] => {
    return state.courses
  }
);
