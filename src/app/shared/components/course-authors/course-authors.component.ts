import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'course-authors',
  templateUrl: './course-authors.component.html',
  styleUrls: ['./course-authors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseAuthorsComponent {
  @Input()
  public courseAuthors: string;
}
