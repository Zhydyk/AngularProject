import { Pipe, PipeTransform } from '@angular/core';
import { Courses } from 'src/app/models/course.interface';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(course: Courses[]): Courses[] {
    const courseArr = [...course];
    return courseArr.sort((currentElement, previousElement) => {
      const dataA = +new Date(currentElement.creationDate);
      const dataB = +new Date(previousElement.creationDate);
      return dataA - dataB;
    });
  }

}
