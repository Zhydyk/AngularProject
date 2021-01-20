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
    (state: CourseState, { course }: { course: Courses }): CourseState => {
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
    (state: CourseState, { course }: { course: Partial<Courses> }): CourseState => {
      console.log('edit course success');
      const editCourse: Courses[] = state.courses.map((courseItem) => courseItem.id === course.id ? courseItem = course as Courses : courseItem);
      return {
        ...state,
        courses: editCourse,
      };
    }
  ),
  on(
    fromCourseAction.addNewCourseSuccess,
    (
      state: CourseState,
      { course }: { course: Partial<Courses> }
    ): CourseState => {
      console.log('add new course success');
      const addNewCourse = state.courses;
      addNewCourse.push(course as Courses);
      console.log(addNewCourse)
      return {
        ...state,
        courses: addNewCourse
      };
    }
  ),
  on(fromCourseAction.editCourse, (state) => {
    console.log('load more');
    return {
      ...state,
    };
  }),
  on(fromCourseAction.addCourse, (state) => {
    console.log('load more');
    return {
      ...state,
    };
  }),
  on(fromCourseAction.deleteCourse, (state) => {
    console.log('load more');
    return {
      ...state,
    };
  })
);

export function courseReducer(state: CourseState | undefined, action: Action) {
  return reducer(state, action);
}
