import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'submit-buttons',
  templateUrl: './submit-buttons.component.html',
  styleUrls: ['./submit-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubmitButtonsComponent {
  @Input()
  public cancelButton: string;

  @Input()
  public submitButton: string;

  @Input()
  public submitId: string;

  @Input()
  public cancelId: string;

  @Input()
  public showSubmitButton = true;

  @Input()
  public showCancelButton = true;

  @Output()
  public submit: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public cancel: EventEmitter<void> = new EventEmitter<void>();

  public onSubmit(): void {
    this.submit.emit();
  }

  public onCancel(): void {
    this.cancel.emit();
  }
}
