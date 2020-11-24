import { Time } from '@angular/common';

export interface Courses {
  id: number;
  title: string;
  creationDate: Date;
  duration: Time;
  description: string;
}
