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
  public delete: EventEmitter<number> = new EventEmitter<number>();
  
  @Output()
  public edit: EventEmitter<number> = new EventEmitter<number>();

  public deleteCourse(): void {
    this.delete.emit(this.course.id);
  }
  
  public editCourse(): void {
    this.edit.emit(this.course.id);
  }
}
