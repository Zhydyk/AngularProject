import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { debounce, debounceTime, finalize } from 'rxjs/operators';
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

    if (searchCourse.length >= 3) {
      this.isLoading = true;
      this.subscription = this.coursePageService
        .getCourseBySearch(searchCourse)
        .pipe(
          debounce(() => interval(1000)),
          finalize(() => (this.isLoading = false))
        )
        .subscribe(() => {
          this.courses$ = this.coursePageService.getCourseBySearch(
            this.filterCourse
          );
        });
    } else if (!searchCourse) {
      this.subscription = this.coursePageService
        .getCourseBySearch(searchCourse)
        .subscribe(() => {
          this.courses$ = this.coursePageService.getList();
        });
    }
  }

  public onDeleteCourse(course: Courses): void {
    this.isLoading = true;
    this.subscription = this.coursePageService
      .deleteCourse(course)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe(
        () => (this.courses$ = this.coursePageService.getList()),
        (err) => console.error(err)
      );
  }

  public onLoadMoreCourses(): void {
    this.courses$ = this.coursePageService.getLoadMoreCourses();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
