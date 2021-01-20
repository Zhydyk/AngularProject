import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Courses } from 'src/app/models/course.interface';

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
  
  @Output()
  public submitDeleteModal: EventEmitter<Courses> = new EventEmitter<Courses>();

  public onCloseDeleteModal(): void {
    this.showDeleteModal.emit();
  }

  public onSubmitDeleteModal(): void {
    this.submitDeleteModal.emit();
  }
}
