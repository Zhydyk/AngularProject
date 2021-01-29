import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpCoursesRequestService } from 'src/app/api/http-course-request/http-courses-request.service';
import { AmountOfCourses } from 'src/app/models/amount-of-courses.interface';
import { Courses } from 'src/app/models/course.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CoursePageService {
  public countOfCourse = 3;

  constructor(private httpCourseService: HttpCoursesRequestService) {}

  public getList(): Observable<Courses[]> {
    const amountOfCourses: AmountOfCourses = {
      sort: 'date',
      count: `${this.countOfCourse}`,
    }
    return this.httpCourseService.getCourses(amountOfCourses);
  }

  public getItemById(id: number): Observable<Courses> {
    return this.httpCourseService.getCourseById(id);
  }

  public deleteCourse(course: Courses): Observable<Courses> {
    return this.httpCourseService.deleteCourseById(course.id);
  }

  public getCourseBySearch(searchElement: string): Observable<Courses[]> {
    const amountOfCourses: AmountOfCourses = {
      textFragment: searchElement,
      sort: 'date',
    }

    return this.httpCourseService.getCourses(amountOfCourses);
  }

  public newCourse(course: Partial<Courses>): Observable<Courses> {
    const formattedCourse = this.formatCourses(course);

    return this.httpCourseService.addNewCourse(formattedCourse);
  }

  public updateCourse(course: Partial<Courses>): Observable<Courses> {
    const updateCourse = this.formatCourses(course);
    return this.httpCourseService.updateCourse(updateCourse);
  }

  public getLoadMoreCourses(): Observable<Courses[]> {
    this.countOfCourse += 3;
    const loadMoreCorses: AmountOfCourses = {
      count: `${this.countOfCourse}`,
      sort: 'date',
    }

    return this.httpCourseService.getCourses(loadMoreCorses);
  }

  private formatCourses(course: Partial<Courses>): Courses {
    return {
      id: course.id || uuidv4(),
      name: course.name || null,
      description: course.description || null,
      isTopRated: course.isTopRated || false,
      date: course.date || null,
      authors: course.authors,
      length: course.length || null,
    };
  }
}
