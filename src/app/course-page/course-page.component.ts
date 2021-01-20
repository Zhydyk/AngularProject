import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { finalize, switchMap } from 'rxjs/operators';
import { Courses } from '../models/course.interface';
import { CoursePageService } from '../shared/services/course-page.service';
import * as fromCourseAction from 'src/app/store/actions/course.action';
import { selectCourses } from '../store/selectors/course.selector';

@Component({
  selector: 'course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss'],
})
export class CoursePageComponent implements OnInit {
  public filterCourse: string;
  public courses$: Observable<Courses[]>;
  public isLoading = false;

  constructor(
    private store: Store
  ) {}

  public ngOnInit(): void {
    this.courses$ = this.store.pipe(select(selectCourses));
    this.store.dispatch(fromCourseAction.getCourses());
  }

  public searchElement(searchElement: string) {
    this.filterCourse = searchElement;

    if (searchElement) {
      this.store.dispatch(fromCourseAction.searchCourse({ searchElement }));
    } else {
      this.store.dispatch(fromCourseAction.getCourses());
    }
  }

  public onDeleteCourse(course: Courses): void {
    this.store.dispatch(fromCourseAction.deleteCourse({ course }));
  }

  public onLoadMoreCourses(): void {
    this.store.dispatch(fromCourseAction.getLoadMore());
  }
}
