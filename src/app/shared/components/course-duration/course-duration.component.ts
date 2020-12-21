import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'course-duration',
  templateUrl: './course-duration.component.html',
  styleUrls: ['./course-duration.component.scss'], 
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseDurationComponent {
  @Input()
  public courseDuration: number;
}
