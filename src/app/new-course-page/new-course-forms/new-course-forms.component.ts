import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Courses } from 'src/app/models/course.interface';

@Component({
  selector: 'new-course-forms',
  templateUrl: './new-course-forms.component.html',
  styleUrls: ['./new-course-forms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewCourseFormsComponent implements OnChanges{
  public courseValue: Partial<Courses> = {};

  @Input()
  public course: Courses;

  @Output()
  public emitCancel: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public emitSubmit: EventEmitter<Partial<Courses>> = new EventEmitter<Partial<Courses>>();

  public ngOnChanges(): void {
    if (this.course) {
      this.courseValue = this.course;
    }
  }

  public onSubmit(): void {
    this.emitSubmit.emit(this.courseValue);
  }

  public onCancel(): void {
    this.emitCancel.emit();
  }
}
