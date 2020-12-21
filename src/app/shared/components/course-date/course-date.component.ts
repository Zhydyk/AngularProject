import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'course-date',
  templateUrl: './course-date.component.html',
  styleUrls: ['./course-date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseDateComponent {
  @Input()
  public courseDate: Date;
}
