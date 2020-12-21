import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'new-course-forms',
  templateUrl: './new-course-forms.component.html',
  styleUrls: ['./new-course-forms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewCourseFormsComponent {}
