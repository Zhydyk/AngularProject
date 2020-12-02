import { Pipe, PipeTransform } from '@angular/core';
import { Courses } from '../models/course.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(courseArr: Courses[], searchText: string): Courses[] {
    const courseValue = searchText.toLowerCase();
    return courseArr.filter(course => course.title.toLowerCase().includes(courseValue));
  }

}
