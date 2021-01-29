import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthorList, Courses } from '../models/course.interface';
import { CoursePageService } from '../shared/services/course-page.service';
import * as fromCourseAction from 'src/app/store/actions/course.action';
import * as fromAuthorAction from 'src/app/store/actions/author.actions';
import { selectAuthor } from '../store/selectors/author.selectors';

@Component({
  selector: 'new-course-page',
  templateUrl: './new-course-page.component.html',
  styleUrls: ['./new-course-page.component.scss'],
})
export class NewCoursePageComponent implements OnInit {
  public course$: Observable<Courses>;
  public authors$: Observable<AuthorList[]>;
  public courseId: string;
  public isLoading = false;
  public course: Courses = {
    id: null,
    name: '',
    description: '',
    isTopRated: null,
    date: null,
    authors: null,
    length: null,
  };
  public editMode = false;

  constructor(
    private courseService: CoursePageService,
    private route: ActivatedRoute,
    private store: Store,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.authors$ = this.store.pipe(select(selectAuthor));
    this.store.dispatch(fromAuthorAction.authors());

    this.courseId = this.route.snapshot.paramMap.get('id');
    if (+this.courseId !== 0) {
      this.editMode = true;
      this.isLoading = true;
      this.course$ = this.courseService
        .getItemById(+this.courseId)
        .pipe(finalize(() => (this.isLoading = false)));
    } else {
      this.editMode = false;
      this.course$ = of(this.course);
    }
  }

  public createNewCourse(course: Partial<Courses>): void {
    console.log(this.course$);
    if (this.editMode) {
      console.log('editttt course');
      this.store.dispatch(fromCourseAction.editCourse({ course }));
    } else {
      console.log('add new course');
      this.store.dispatch(fromCourseAction.addCourse({ course }));
    }

    this.router.navigate(['courses']);
  }

  public onCancel(): void {
    this.router.navigate(['courses']);
  }
}
