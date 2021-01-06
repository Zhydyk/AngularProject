import { EventEmitter, Output } from '@angular/core';
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

  @Output() courseDurationChange = new EventEmitter<number>();

  onDurationChange(model: number): void {
    this.courseDurationChange.emit(model);
  }
}
