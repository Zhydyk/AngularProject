import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss'],
})
export class CourseSearchComponent {
  public courseSearch: string;

  @Output()
  public search: EventEmitter<string> = new EventEmitter<string>();

  public searchCourse(): void {
    this.search.emit(this.courseSearch);
  }
}
