import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';
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

  constructor(private coursePageService: CoursePageService) {}

  public ngOnInit(): void {
    this.isLoading = true;
    this.courses$ = this.coursePageService
      .getList()
      .pipe(finalize(() => (this.isLoading = false)));
  }

  public searchElement(searchCourse: string) {
    this.filterCourse = searchCourse;
    if (!searchCourse) {
      this.isLoading = true;
      this.courses$ = this.coursePageService.getList().pipe(delay(500), finalize(() => (this.isLoading = false)));
    } else if (searchCourse.length >= 3) {
      this.isLoading = true;
      this.courses$ = this.coursePageService.getCourseBySearch(searchCourse).pipe(delay(500), finalize(() => (this.isLoading = false)));
    }
  }

  public onDeleteCourse(course: Courses): void {
    this.isLoading = true;
    this.coursePageService
      .deleteCourse(course).pipe(delay(500), finalize(() => (this.isLoading = false)))
      .subscribe(
        () => {
          this.courses$ = this.filterCourse
            ? this.coursePageService.getCourseBySearch(this.filterCourse)
            : this.coursePageService.getList();
        },
        (err) => console.error(err)
      );
  }

  public onLoadMoreCourses(): void {
    this.courses$ = this.coursePageService.getLoadMoreCourses();
  }
}
