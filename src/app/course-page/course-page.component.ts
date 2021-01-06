import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses } from '../models/course.interface';
import { CoursePageService } from '../shared/services/course-page.service';

@Component({
  selector: 'course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss'],
})
export class CoursePageComponent implements OnInit {
  public filterCourse: string;
  public courses$: Observable<Courses[]>;

  constructor(private coursePageService: CoursePageService) {}

  public ngOnInit(): void {
    this.courses$ = this.coursePageService.getList();
    
  }

  public searchElement(searchCourse: string) {
    this.filterCourse = searchCourse;
    this.courses$ = this.coursePageService.getCourseBySearch(searchCourse);
  }

  public onDeleteCourse(course: Courses): void {
    this.coursePageService.deleteCourse(course).subscribe(
      () => {
        this.courses$ = this.filterCourse 
          ? this.coursePageService.getCourseBySearch(this.filterCourse) 
          : this.coursePageService.getList();
      },
      (err) => console.error(err),
    )
  }
}
