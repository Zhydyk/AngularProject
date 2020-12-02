import { Component } from '@angular/core';
import { Courses } from '../models/course.interface';

@Component({
  selector: 'course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss'],
})
export class CoursePageComponent {
  public courses: Courses[] = [
    {
      id: 1,
      title: 'Mentoring Program 1',
      creationDate: new Date('2020/02/09'),
      duration: 60,
      description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
    },
    {
      id: 2,
      title: 'Mentoring Program 2',
      creationDate: new Date('2020/01/01'),
      duration: 8,
      description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
    },
    {
      id: 3,
      title: 'Mentoring Program 3',
      creationDate: new Date('2020/10/01'),
      duration: 15,
      description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
    },
    {
      id: 4,
      title: 'Mentoring Program 4',
      creationDate: new Date('2020/08/23'),
      duration: 200,
      description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
    },
    {
      id: 5,
      title: 'Program 5',
      creationDate: new Date('2020/10/23'),
      duration: 10,
      description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
    },
  ];

  public searchElement(course: string): void {
    console.log(course);
  }

  public onDeleteCourse(id: number): void {
    console.log(`Delete course ${id}`);
  }
}
