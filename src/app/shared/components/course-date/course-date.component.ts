import {
  ChangeDetectionStrategy,
  Component,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'course-date',
  templateUrl: './course-date.component.html',
  styleUrls: ['./course-date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CourseDateComponent,
      multi: true,
    },
  ],
})
export class CourseDateComponent implements ControlValueAccessor, OnDestroy {
  public formControl: FormControl;
  public onChange = (_: string) => {};
  public onTouched = () => {};

  private subscription: Subscription;

  @Output() courseDateChange = new EventEmitter<Date>();

  public ngOnInit(): void {
    this.formControl = new FormControl('');
    this.subscription = this.formControl.valueChanges.subscribe((value) => {
      this.onChange(value);
    });
  }
  onDateChange(model: Date): void {
    this.courseDateChange.emit(model);
  }

  writeValue(value: string) {
    console.log('course-date', value);
    if (!value) {
      return;
    }
    this.formControl.setValue(value.substring(0, 10), {
      emitEvent: false,
      onlySelf: true,
    });
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
