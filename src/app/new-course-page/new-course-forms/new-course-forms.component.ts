import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Courses } from 'src/app/models/course.interface';

@Component({
  selector: 'new-course-forms',
  templateUrl: './new-course-forms.component.html',
  styleUrls: ['./new-course-forms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewCourseFormsComponent {
  public courseValue: Partial<Courses> = {};

  @Input()
  public course: Courses;

  @Output()
  public emitCancel: EventEmitter<void> = new EventEmitter<void>();

  public ngOnInit() {
    if (this.course) {
      this.courseValue = this.course;
    }
  }

  public onCancel(): void {
    this.emitCancel.emit();
  }
}
