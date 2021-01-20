import { createAction, props } from '@ngrx/store';
import { Courses } from 'src/app/models/course.interface';

export const getCourses = createAction('[Course Page Component] Get Courses');

export const getCoursesSuccess = createAction(
  '[Course Page Component] Get Courses Success',
  props<{ courses: Courses[] }>()
);

export const getCoursesError = createAction(
  '[Course Page Component] Get Courses Error',
  props<{ error: Error | string }>()
);

export const getCourse = createAction(
  '[Add/Edit Course Page Component] Get Courses',
  props<{ courseId: number }>()
  );

export const getCourseSuccess = createAction(
  '[Add/Edit Course Page Component] Get Course Success',
  props<{ courses: Courses }>()
);

export const getCourseError = createAction(
  '[Add/Edit Course Page Component] Get Course Error',
  props<{ error: Error | string }>()
);

export const getLoadMore = createAction(
  '[Course Page Component] Load More Courses'
)

export const getLoadMoreSuccess = createAction(
  '[Course Page Component] Load More Courses Success',
  props<{ courses: Courses[] }>()
);

export const getLoadMoreError = createAction(
  '[Course Page Component] Load More Courses Error',
  props<{ error: Error | string }>()
);

export const addCourse = createAction(
  '[New Course Page Component] New Course',
  props<{ course: Partial<Courses> }>()
);

export const addNewCourseSuccess = createAction(
  '[New Course Page Component] New Course Success',
  props<{ course: Partial<Courses> }>()
);

export const addNewCourseError = createAction(
  '[New Course Page Component] New Course Error',
  props<{ error: Error | string }>()
);

export const searchCourse = createAction(
  '[Search Course Page Component] Search Course',
  props<{ searchElement: string }>()
);

export const searchCourseSuccess = createAction(
  '[Search Course Page Component] Search Course Success',
  props<{ courses: Courses[] }>()
);

export const searchCourseError = createAction(
  '[Search Course Page Component] Search Course Error',
  props<{ error: Courses[] }>()
);

export const deleteCourse = createAction(
  '[Delete Course Page Component] Delete Course',
  props<{course: Courses}>()
);

export const deleteCourseSuccess = createAction(
  '[Delete Course Page Component] Delete Course Success',
  props<{ course: Courses }>()
);

export const deleteCourseError = createAction(
  '[Delete Course Page Component] Delete Course Error',
  props<{ error: Error | string }>()
);

export const editCourse = createAction(
  '[Edit Course Page Component] Edit Course',
  props<{ course: Partial<Courses> }>()
);

export const editCourseSuccess = createAction(
  '[Edit Course Page Component] Edit Course Success',
  props<{ course: Partial<Courses> }>()
);

export const editCourseError = createAction(
  '[Edit Course Page Component] Edit Course Error',
  props<{ error: Error | string }>()
);
