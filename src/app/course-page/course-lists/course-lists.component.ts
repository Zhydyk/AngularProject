import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Courses } from 'src/app/models/course.interface';

@Component({
  selector: 'course-lists',
  templateUrl: './course-lists.component.html',
  styleUrls: ['./course-lists.component.scss'],
})
export class CourseListsComponent {
  @Input()
  public courseLists: Courses[];

  @Output()
  public deleteCourse = new EventEmitter<Courses>();

  public onDeleteCourse(course: Courses): void {
    this.deleteCourse.emit(course);
  }
}
