import * as auth from './reducers/auth.reducer';
import * as course from './reducers/couse.reducer';
import * as author from './reducers/author.reducer';

export interface AppState {
  auth: auth.AuthState;
  courses: course.CourseState;
  authors: author.AuthorState
}

export const reducers = {
  auth: auth.authReducer,
  courses: course.courseReducer,
  authors: author.authorReducer,
};
