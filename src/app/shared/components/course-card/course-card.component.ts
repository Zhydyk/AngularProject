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
  public descriptionForModal: string;
  public titleModal = 'Delete course?';
  public showModal = false;

  @Input()
  public course: Courses;
  
  @Input()
  public courseLists: Courses[];

  @Output()
  public delete: EventEmitter<Courses> = new EventEmitter<Courses>();
  
  @Output()
  public edit: EventEmitter<number> = new EventEmitter<number>();

  public deleteCourse(): void {
    this.delete.emit(this.course);
  }
  
  public editCourse(): void {
    this.edit.emit(this.course.id);
  }

  public hideModal() {
    this.showModal = false;
  }

  public confirmDelete() {
    this.showModal = false;
  }

  public showDeleteModal(): void {
    const up = (str) => str.toUpperCase();
    this.descriptionForModal = `Are you sure you want to delete`
    + ` "${ up(this.course.name) }"`;
    this.showModal = true;
  }
}
