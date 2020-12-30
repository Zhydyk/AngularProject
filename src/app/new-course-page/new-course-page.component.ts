import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Courses } from '../models/course.interface';
import { CoursePageService } from '../shared/services/course-page.service';

@Component({
  selector: 'new-course-page',
  templateUrl: './new-course-page.component.html',
  styleUrls: ['./new-course-page.component.scss']
})
export class NewCoursePageComponent implements OnInit {
  public course: Courses;
  public courseId: string;

  constructor(
    private courseService: CoursePageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id');
    this.course = {...this.courseService.getItemById(this.courseId)}
  }

}
