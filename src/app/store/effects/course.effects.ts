import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map, pluck, switchMap } from 'rxjs/operators';
import { Courses } from 'src/app/models/course.interface';
import { CoursePageService } from 'src/app/shared/services/course-page.service';
import * as fromCourseAction from '../actions/course.action';

@Injectable()
export class CourseEffects {
  constructor(
    private actions$: Actions,
    private coursePageService: CoursePageService,
    private router: Router
  ) {}

  public getCourses$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromCourseAction.getCourses),
      switchMap(() => {
        return this.coursePageService.getList().pipe(
          map((courses: Courses[]) =>
            fromCourseAction.getCoursesSuccess({ courses })
          ),
          catchError((err) => of(fromCourseAction.getCoursesError(err)))
        );
      })
    );
  });

  public getLoadMoreCourses$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromCourseAction.getLoadMore),
      switchMap(() => {
        return this.coursePageService.getLoadMoreCourses();
      }),
      map((courses: Courses[]) =>
        fromCourseAction.getLoadMoreSuccess({ courses })
      ),
      catchError((err) => of(fromCourseAction.getLoadMoreError(err)))
    );
  });

  public getCourse$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromCourseAction.getCourse),
      pluck('courseId'),
      switchMap((courseId) => {
        return this.coursePageService.getItemById(courseId).pipe(
          map((courses: Courses) =>
            fromCourseAction.getCourseSuccess({ courses })
          ),
          catchError((err) => of(fromCourseAction.getCourseError(err)))
        );
      })
    );
  });

  public deleteCourse$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromCourseAction.deleteCourse),
      switchMap(({ course }: { course: Courses }) => {
        return this.coursePageService.deleteCourse(course).pipe(
          map(() => fromCourseAction.deleteCourseSuccess({ course })),
          catchError((err) => of(fromCourseAction.deleteCourseError(err)))
        );
      })
    );
  });

  public addCourse$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromCourseAction.addCourse),
      switchMap(({ course }: { course: Partial<Courses> }) => {
        return this.coursePageService.newCourse(course).pipe(
          map(() => fromCourseAction.addNewCourseSuccess({ course })),
          catchError((err) => of(fromCourseAction.addNewCourseError(err)))
        );
      })
    );
  });

  public editCourse$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromCourseAction.editCourse),
      concatMap(({ course }) => {
        return this.coursePageService.updateCourse(course).pipe(
          map(() => fromCourseAction.editCourseSuccess({ course })),
          catchError((err) => of(fromCourseAction.editCourseError(err)))
        );
      })
    );
  });

  public searchCourse$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromCourseAction.searchCourse),
      switchMap(({ searchElement }: { searchElement: string }) => {
        return this.coursePageService.getCourseBySearch(searchElement);
      }),
      map((courses: Courses[]) =>
        fromCourseAction.searchCourseSuccess({ courses })
      ),
      catchError((err) => of(fromCourseAction.searchCourseError(err)))
    );
  });
}
