import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Courses } from '../models/course.interface';
import { CoursePageService } from '../shared/services/course-page.service';
import * as fromCourseAction from 'src/app/store/actions/course.action';

@Component({
  selector: 'new-course-page',
  templateUrl: './new-course-page.component.html',
  styleUrls: ['./new-course-page.component.scss'],
})
export class NewCoursePageComponent implements OnInit {
  public course$: Observable<Courses>;
  public courseId: string;
  public isLoading = false;

  constructor(
    private courseService: CoursePageService,
    private route: ActivatedRoute,
    private store: Store,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id');
    if (+this.courseId !== 0) {
      this.isLoading = true;
      this.course$ = this.courseService
        .getItemById(+this.courseId)
        .pipe(finalize(() => (this.isLoading = false)));
    }
  }

  public createNewCourse(course: Partial<Courses>): void {
    if (this.course$) {
     this.store.dispatch(fromCourseAction.editCourse({course}))
    } else {
      this.store.dispatch(fromCourseAction.addCourse({course}))
    }

    this.router.navigate(['courses']);
  }

  public onCancel(): void {
    this.router.navigate(['courses']);
  }
}
