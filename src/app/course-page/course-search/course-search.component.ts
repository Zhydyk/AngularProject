import { Component } from '@angular/core';

@Component({
  selector: 'course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss'],
})
export class CourseSearchComponent {
  public courseSearch: string;

  public searchCourse(searchElement): void {
    console.log(searchElement);
  }
}
