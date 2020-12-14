import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteModalComponent {
  @Input()
  public title: string;

  @Input()
  public description: string;

  @Input()
  public isModalOpen: boolean;

  @Output()
  public showDeleteModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  public onCloseDeleteModal(): void {
    this.showDeleteModal.emit();
  }

  public onSubmitDeleteModal(): void {
    this.showDeleteModal.emit();
  }
}
