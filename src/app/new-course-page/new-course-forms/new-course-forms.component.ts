import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthorList, Courses } from 'src/app/models/course.interface';

@Component({
  selector: 'new-course-forms',
  templateUrl: './new-course-forms.component.html',
  styleUrls: ['./new-course-forms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewCourseFormsComponent implements OnInit {
  public courseValue: Partial<Courses> = {};
  public groupForms: FormGroup;
  public listOfAuthors: AuthorList[];

  get name(): AbstractControl {
    return this.groupForms.get('name');
  }

  get description(): AbstractControl {
    return this.groupForms.get('description');
  }

  get length(): AbstractControl {
    return this.groupForms.get('length');
  }

  get date(): AbstractControl {
    return this.groupForms.get('date');
  }

  get authors() {
    return this.groupForms.get('authors') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  @Input()
  public course: Courses;

  @Input()
  public authorsList: AuthorList[]

  @Output()
  public emitCancel: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public emitSubmit: EventEmitter<Partial<Courses>> = new EventEmitter<
    Partial<Courses>
  >();

  public ngOnInit(): void {
    if (this.course) {
      this.courseValue = this.course;
    }
    
    this.buildForm();
  }

  public onSubmit(): void {
    console.log('new course forms ONSUBMIT', this.groupForms.value);
    this.emitSubmit.emit(
      this.course
        ? { ...this.groupForms.value, id: this.course.id}
        : { ...this.groupForms.value }
    );
  }

  public onCancel(): void {
    this.emitCancel.emit();
  }

  private buildForm(): void {
    this.groupForms = this.fb.group({
      name: [
        this.courseValue.name,
        {
          validators: [Validators.required, Validators.maxLength(50)],
        },
      ],
      description: [
        this.courseValue.description,
        {
          validators: [Validators.required, Validators.maxLength(500)],
        },
      ],
      length: [
        this.courseValue.length,
        {
          validators: [Validators.required, Validators.pattern("^[0-9]*$")],
        },
      ],
      date: [
        this.courseValue.date,
        {
          validators: [Validators.required],
        },
      ],
      authors: [
        this.courseValue.authors,
        {
          validators: [Validators.required],
        },
      ],
    });
  }
}
