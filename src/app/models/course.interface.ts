export interface Courses {
  id: number;
  name: string;
  description: string;
  isTopRated?: boolean;
  date: Date;
  authors: CourseAuthors[];
  length: number;
}

export interface CourseAuthors {
  id: number;
  name: string;
  lastName: string;
}
