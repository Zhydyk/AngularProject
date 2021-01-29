import { OnDestroy, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'course-duration',
  templateUrl: './course-duration.component.html',
  styleUrls: ['./course-duration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CourseDurationComponent,
      multi: true,
    },
  ],
})
export class CourseDurationComponent
  implements ControlValueAccessor, OnInit, OnDestroy {
  public formControl: FormControl;
  public onChange = (_: string) => {};
  public onTouched = () => {};

  private subscription$: Subscription;

  public ngOnInit(): void {
    this.formControl = new FormControl('', {
      validators: [Validators.required, Validators.maxLength(50)],
    });
    this.subscription$ = this.formControl.valueChanges.subscribe((value) => {
      this.onChange(value);
    });
  }

  public writeValue(value: string) {
    this.formControl.setValue(value, { emitEvent: false, onlySelf: true });
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
