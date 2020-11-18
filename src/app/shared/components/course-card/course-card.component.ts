import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Courses } from 'src/app/models/course.interface';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent {
  @Input()
  public course: Courses;

  @Output()
  public emitDeleteCourse: EventEmitter<number> = new EventEmitter<number>();

  public deleteCourse(): void {
    this.emitDeleteCourse.emit(this.course.id);
  } 
}
