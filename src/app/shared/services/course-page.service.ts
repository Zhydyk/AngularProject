import { Injectable } from '@angular/core';
import { Courses } from 'src/app/models/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CoursePageService {
  public courses: Courses[] = [
    {
      id: 1,
      title: 'Mentoring Program 1',
      creationDate: new Date('2020/12/03'),
      duration: 60,
      description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
      topRated: true,
    },
    {
      id: 2,
      title: 'Mentoring Program 2',
      creationDate: new Date('2020/10/30'),
      duration: 8,
      description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
    },
    {
      id: 3,
      title: 'Mentoring Program 3',
      creationDate: new Date('2020/10/01'),
      duration: 15,
      description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
      topRated: true,
    },
    {
      id: 4,
      title: 'Mentoring Program 4',
      creationDate: new Date('2021/08/23'),
      duration: 500,
      description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
    },
    {
      id: 5,
      title: 'Program 5',
      creationDate: new Date('2020/10/23'),
      duration: 59,
      description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
    },
  ];

  public getList(): Courses[] {
    return this.courses;
  }

  public createCourse(course: Courses): void {
    this.courses.push(course);
  }

  public getItemById(id: number): Courses {
    return this.courses.find( course => course.id === id);
  }

  public updateItem(course: Courses): Courses[] {
    return [...this.courses, course];
  }

  public removeItem(id: number): void {
    this.courses = this.courses.filter(item => item.id !== id);
  }
}
