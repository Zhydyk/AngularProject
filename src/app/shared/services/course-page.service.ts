import { NullTemplateVisitor } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpCoursesRequestService } from 'src/app/api/http-course-request/http-courses-request.service';
import { AmountOfCourses } from 'src/app/models/amount-of-courses.interface';
import { Courses } from 'src/app/models/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CoursePageService {
  constructor(private httpCourseService: HttpCoursesRequestService) {}

  public getList(): Observable<Courses[]> {
    const amountOfCourses: AmountOfCourses = {
      sort: 'date',
      count: 10,
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
      search: searchElement,
      sort: 'data',
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

  private formatCourses(course: Partial<Courses>): Courses {
    return {
      id: course.id || null,
      name: course.name || null,
      description: course.description || null,
      isTopRated: course.isTopRated || false,
      date: course.date || null,
      authors: course.authors,
      length: course.length || null,
    };
  }
}
