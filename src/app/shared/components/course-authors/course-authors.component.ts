import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';

import {
  ControlValueAccessor,
  FormArray,
  FormBuilder,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthorList } from 'src/app/models/course.interface';

@Component({
  selector: 'course-authors',
  templateUrl: './course-authors.component.html',
  styleUrls: ['./course-authors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CourseAuthorsComponent,
      multi: true,
    },
  ],
})
export class CourseAuthorsComponent implements ControlValueAccessor {
  public currentAuthorLists: AuthorList[] = [];
  public onChange = (authorList: AuthorList[]) => {};
  public onTouched = () => {};
  public authorFormGroup: FormGroup;

  @Input()
  public authorsList: AuthorList[] = [];

  public writeValue(value: AuthorList[]) {
    if(!value) {
      return this.currentAuthorLists = [];
    }
    this.currentAuthorLists = [...value];
  }

  public registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public addAuthor(choosenAuthorsId) {
    const findAuthor = this.authorsList.find(
      (item) => item.id === choosenAuthorsId.target.value
    );
    this.currentAuthorLists.push(findAuthor);
    this.onChange(this.currentAuthorLists);
  }

  public dropAuthor(indexArray: number) {
    this.currentAuthorLists.splice(indexArray, 1);
    this.onChange(this.currentAuthorLists);
  }
}
