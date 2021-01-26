import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import {
  ControlValueAccessor,
  FormArray,
  FormArrayName,
  FormBuilder,
  FormControl,
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
export class CourseAuthorsComponent implements ControlValueAccessor, OnInit {
  public onChange = (_: string) => {};
  public onTouched = () => {};
  public formArrayAuthors = new FormArray([])
  public authorFormGroup: FormGroup;

  private subscription: Subscription;

  get authors(): FormArray {
    return this.formArrayAuthors.get('authors') as FormArray;
  }

  // @Input()
  // public authors: AuthorList[];

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.authorFormGroup = this.fb.group({
      authorArray: new FormArray([])
    })
    // this.formControl = new FormControl('');
    // this.subscription = this.formControl.valueChanges.subscribe((value) => {
    //   this.onChange(value);
    // });
  }

  public writeValue(value: AuthorList[]) {
    console.log(value);
    if (!value) {
      return;
    }
    // this.authors = value;
    // this.formControl.setValue(value, { emitEvent: false, onlySelf: true });
  }

  public registerOnTouched(fn: any) {
    this.onTouched = fn
  }

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }
  
  public addAuthor() {
    this.formArrayAuthors.push(new FormControl(''))
  }

  dropAuthor(index: number): void {
    this.formArrayAuthors.removeAt(index);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
