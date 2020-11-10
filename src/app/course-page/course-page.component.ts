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
      creationDate: '10-05-2020',
      duration: 3,
      description:
      `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
    },
    {
      id: 2,
      title: 'Mentoring Program 2',
      creationDate: '10-05-2014',
      duration: 3,
      description:
      `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
    },
    {
      id: 3,
      title: 'Mentoring Program 3',
      creationDate: '10-05-2019',
      duration: 3,
      description:
      `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
    },
    {
      id: 4,
      title: 'Mentoring Program 4',
      creationDate: '10-05-2017',
      duration: 3,
      description:
        `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
    },
    {
      id: 5,
      title: 'Mentoring Program 5',
      creationDate: '08-06-2018',
      duration: 3,
      description:
      `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
    },
  ];
}
