import { Action, createReducer, on } from '@ngrx/store';
import { Courses } from 'src/app/models/course.interface';
import * as fromCourseAction from 'src/app/store/actions/course.action';

export interface CourseState {
  courses: Courses[];
  errorMessage: string | null;
}

export const initialCourseState: CourseState = {
  courses: [],
  errorMessage: null,
};

const reducer = createReducer(
  initialCourseState,
  on(fromCourseAction.getCourses, (state) => {
    console.log('get courses');
    return {
      ...state,
    };
  }),
  on(fromCourseAction.getCoursesSuccess, (state, { courses }) => {
    console.log('get courses success');
    return {
      ...state,
      courses,
      errorMessage: null,
    };
  }),
  on(
    fromCourseAction.getCoursesError,
    fromCourseAction.getLoadMoreError,
    fromCourseAction.editCourseError,
    fromCourseAction.deleteCourseError,
    fromCourseAction.searchCourseError,
    fromCourseAction.addNewCourseError,
    (state) => {
      console.log('Error courses');
      return {
        ...state,
        courses: null,
        errorMessage: `Something went wrong, Please try again`,
      };
    }
  ),
  on(fromCourseAction.getLoadMore, (state) => {
    console.log('load more');
    return {
      ...state,
    };
  }),
  on(
    fromCourseAction.getLoadMoreSuccess,
    fromCourseAction.searchCourseSuccess,
    (state: CourseState, { courses }: { courses: Courses[] }): CourseState => {
      console.log('add/edit loadmore success');
      const newCourses = [...courses];
      return {
        ...state,
        courses: newCourses,
      };
    }
  ),

  on(
    fromCourseAction.deleteCourseSuccess,
    (state: CourseState, { course }: { course: Courses }) => {
      console.log('delete course success');
      const filterDeletedCourse = state.courses.filter(
        (value) => value.id !== course.id
      );
      return {
        ...state,
        courses: filterDeletedCourse,
      };
    }
  ),

  on(
    fromCourseAction.editCourseSuccess,
    (state: CourseState, { course }) => {
      console.log('edit/new course success');
      const newValue = state.courses.map((item) => (item.id === course.id) ? item = course as Courses : item) 
      console.log('newValue', newValue)
      return {
        ...state,
        courses: newValue
      };
    }
  ),
  on(fromCourseAction.editCourse, (state) => {
    console.log('Edit Course');
    return {
      ...state,
    };
  }),
  on(fromCourseAction.addCourse, (state) => {
    console.log('Add course');
    return {
      ...state,
    };
  }),
  on(fromCourseAction.deleteCourse, (state) => {
    console.log('Delete course');
    return {
      ...state,
    };
  })
);

export function courseReducer(state: CourseState | undefined, action: Action) {
  return reducer(state, action);
}
