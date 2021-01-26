export interface Courses {
  id: number;
  name: string;
  description: string;
  isTopRated?: boolean;
  date: Date;
  authors: AuthorOption[];
  length: number;
}

export interface AuthorOption {
  id: number;
  name: string;
  lastName?: string;
}

export interface AuthorList {
  id: string;
  name: string;
}
