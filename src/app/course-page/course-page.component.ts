import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { finalize, switchMap } from 'rxjs/operators';
import { Courses } from '../models/course.interface';
import { CoursePageService } from '../shared/services/course-page.service';

@Component({
  selector: 'course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss'],
})
export class CoursePageComponent implements OnInit {
  public filterCourse: string;
  public courses$: Observable<Courses[]>;
  public isLoading = false;
  public subscription: Subscription = new Subscription();

  constructor(private coursePageService: CoursePageService) {}

  public ngOnInit(): void {
    this.isLoading = true;
    this.courses$ = this.coursePageService
      .getList()
      .pipe(finalize(() => (this.isLoading = false)));
  }

  public searchElement(searchCourse: string) {
    this.filterCourse = searchCourse;

    if (searchCourse) {
      this.isLoading = true;
      this.courses$ = this.coursePageService
        .getCourseBySearch(this.filterCourse)
        .pipe(finalize(() => (this.isLoading = false)));
    } else {
      this.isLoading = true;
      this.courses$ = this.coursePageService
        .getList()
        .pipe(finalize(() => (this.isLoading = false)));
    }
  }

  public onDeleteCourse(course: Courses): void {
    this.isLoading = true;
    this.courses$ = this.coursePageService.deleteCourse(course).pipe(
      switchMap(() => this.coursePageService.getList()),
      finalize(() => (this.isLoading = false))
    );
  }

  public onLoadMoreCourses(): void {
    this.courses$ = this.coursePageService.getLoadMoreCourses();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
