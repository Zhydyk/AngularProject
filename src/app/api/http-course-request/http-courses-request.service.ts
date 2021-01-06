import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AmountOfCourses } from 'src/app/models/amount-of-courses.interface';
import { Courses } from 'src/app/models/course.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpCoursesRequestService {
  public courseUrl = 'http://localhost:3004';
  public courses: Courses[];

  constructor(private httpRequest: HttpClient) {}

  public getCourses(amountOfCourses: AmountOfCourses): Observable<Courses[]> {
    return this.httpRequest.get<Courses[]>(`${this.courseUrl}/courses?sort=${amountOfCourses.sort}&count=${amountOfCourses.count}&textFragment=${amountOfCourses.search || null}`);
  }

  public getCourseById(id: number): Observable<Courses> {
    return this.httpRequest.get<Courses>(`${this.courseUrl}/courses/${id}`);
  }

  public deleteCourseById(id: number): Observable<Courses> {
    return this.httpRequest.delete<Courses>(`${this.courseUrl}/courses/${id}`);
  }

  public addNewCourse(course: Courses): Observable<Courses> {
    console.log('htttp send', course);
    return this.httpRequest.post<Courses>(`${this.courseUrl}/courses`, course)
  }

  public updateCourse(course: Courses): Observable<Courses> {
    return this.httpRequest.patch<Courses>(`${this.courseUrl}/courses/${course.id}`, course);
  }
}
