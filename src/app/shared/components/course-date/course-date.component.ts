import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

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
export class CourseDateComponent implements ControlValueAccessor {
  public formControl: FormControl;
  public onChange = (_: string) => {};
  public onTouched = () => {};
  public date: string;

  public writeValue(value: string) {
    if(!value) {
      return this.date = null;
    }
    this.date = value.substring(0, 10);
  }

  public registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public myDateChange(event) {
    this.date = event.target.value;
    this.onChange(this.date)
  }
}
