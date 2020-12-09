import { ExpectedConditions } from 'protractor';
import { Courses } from '../models/course.interface';
import { OrderByPipe } from './order-by.pipe';
const mockCourses: Courses[] = [
  {
    id: 1,
    title: 'Mentoring Program 1',
    creationDate: new Date('2020/02/09'),
    duration: 2,
    description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
  },
  {
    id: 2,
    title: 'Mentoring Program 2',
    creationDate: new Date('1997/12/01'),
    duration: 140,
    description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
  },
  {
    id: 3,
    title: 'Mentoring Program 3',
    creationDate: new Date('2212/10/01'),
    duration: 15,
    description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
  },
];

describe('OrderByPipe', () => {
  const orderBy = new OrderByPipe();

  it('create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });

  it('should sort courses by Date', () => {
    const sortByDate = orderBy.transform(mockCourses);
    expect(sortByDate).toEqual([
      {
        id: 2,
        title: 'Mentoring Program 2',
        creationDate: new Date('1997/12/01'),
        duration: 140,
        description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
      },
      {
        id: 1,
        title: 'Mentoring Program 1',
        creationDate: new Date('2020/02/09'),
        duration: 2,
        description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
      },
      {
        id: 3,
        title: 'Mentoring Program 3',
        creationDate: new Date('2212/10/01'),
        duration: 15,
        description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
      },
    ])
  })
});
