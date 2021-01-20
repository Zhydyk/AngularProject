import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss'],
})
export class CourseSearchComponent implements OnInit{
  public courseSearch: string;
  public subject = new Subject<string>();

  @Output()
  public search: EventEmitter<string> = new EventEmitter<string>(true);

  public ngOnInit(): void {
    this.subject.pipe(
      debounceTime(1000),
      filter((value) => !value || value.length > 3),
     ).subscribe(
      (value) => this.search.emit(value)
     )
  }

  public searchCourse(): void {
    this.subject.next(this.courseSearch);
  }

  public ngOnDestroy(): void {
    this.subject.unsubscribe();
  }
}
