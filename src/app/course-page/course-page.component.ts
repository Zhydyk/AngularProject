import { Component } from '@angular/core';
import { Courses } from '../models/course.interface';
import { FilterPipe } from '../shared/pipes/filter/filter.pipe';
import { CoursePageService } from '../shared/services/course-page.service';

@Component({
  selector: 'course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss'],
})
export class CoursePageComponent {
  public filterCourse: Courses[];

  constructor(private filterPipe: FilterPipe, private coursePageService: CoursePageService) {}

  get courses() {
    return this.coursePageService.getList();
  }

  get filteredCourses() {
    return this.filterCourse ? this.filterCourse : this.courses;
  }

  public searchElement(searchCourse: string): void {
    this.filterCourse = this.filterPipe.transform(this.courses, searchCourse);
  }

  public onDeleteCourse(id: number) {
    const confirmationDelete = confirm('Do you really want to delete this course? Yes/No');
    if (confirmationDelete) {
      this.coursePageService.removeItem(id);
    }
  }
}
