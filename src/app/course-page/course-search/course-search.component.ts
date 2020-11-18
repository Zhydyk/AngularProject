import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss'],
})
export class CourseSearchComponent {
  public courseSearch: string;

  @Output()
  public emitSearchElement: EventEmitter<string> = new EventEmitter<string>();

  public searchCourse(searchElement): void {
    this.emitSearchElement.emit(searchElement);
  }
}
