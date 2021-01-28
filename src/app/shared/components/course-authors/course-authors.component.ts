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
export class CourseAuthorsComponent implements ControlValueAccessor, OnInit, OnDestroy {
  public onChange = (list: AuthorList[]) => {};
  public onTouched = () => {};
  public authorFormGroup: FormGroup;

  private subscription: Subscription;

  get authorsArray(): FormArray {
    return this.authorFormGroup.get('authorsArray') as FormArray;
  }

  @Input()
  public authorsList: AuthorList[] = [];
  public currentAuthorLists: AuthorList[] = [];

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.authorFormGroup = this.fb.group({
      authorsArray: new FormArray([])
    })

    this.subscription = this.authorsArray.valueChanges.subscribe((value) => {
      console.log('subscription author',value);
      this.onChange(value)
    })
  }

  public writeValue(value: AuthorList[]) {
    console.log('component authors, write value', value);
    this.currentAuthorLists = [...value];
    value.forEach(item => {
      return this.authorsArray.push(this.fb.control({
        value: item.name,
        disabled: true
      }))
    })
    console.log(this.authorsArray.value)
  }

  public registerOnTouched(fn: any) {
    this.onTouched = fn
  }

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }
  
  public addAuthor(choosenAuthorsId) {
    const findAuthor = this.authorsList.find(item => item.id === choosenAuthorsId.target.value);
    this.currentAuthorLists.push(findAuthor);
    this.onChange(this.currentAuthorLists);
  }

  dropAuthor(index: number): void {
    console.log(index)
    this.currentAuthorLists.slice(index, 1);
    this.onChange(this.currentAuthorLists);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
