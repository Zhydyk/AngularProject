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
  public descriptionForModal: string;
  public titleModal = 'Delete course?';
  public showModal = false;
  public course: Courses;

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

  public hideModal() {
    this.showModal = false;
  }

  public confirmDelete() {
    this.showModal = false;
    this.coursePageService.removeItem(this.course);
  }

  public onDeleteCourse(course: Courses) {
    this.descriptionForModal = `Are you sure you want to delete`
    + ` ${course.title}`;
    this.showModal = true;
    this.course = course;
  }
}
