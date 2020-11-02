export interface Courses {
  id: number;
  title: string;
  creationDate: string;
  duration: number;
  description: string;
}

const courses: Courses[] = [
  {
    id: 1,
    title: 'Mentoring Program',
    creationDate: '10-05-2020',
    duration: 3,
    description: 'Lorem ipsum',
  },
];
