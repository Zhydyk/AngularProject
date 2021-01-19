import * as auth from './reducers/auth.reducer';
import * as course from './reducers/couse.reducer';

export interface AppState {
  auth: auth.AuthState;
  courses: course.CourseState;
}

export const reducers = {
  auth: auth.authReducer,
  courses: course.courseReducer,
};
