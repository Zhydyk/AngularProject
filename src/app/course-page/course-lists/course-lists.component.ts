import { Component, Input, Output } from '@angular/core';
import { Courses } from 'src/app/models/course.interface';

@Component({
  selector: 'course-lists',
  templateUrl: './course-lists.component.html',
  styleUrls: ['./course-lists.component.scss'],
})
export class CourseListsComponent {
  @Input()
  public courseLists: Courses[];

  public onDeleteCourse(id: number):void {
    this.courseLists = this.courseLists.filter((course: Courses) => course.id !== id);
  }
}
