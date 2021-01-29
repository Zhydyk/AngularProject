import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DeleteModalComponent } from './delete-modal.component';

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [DeleteModalComponent],
  exports: [DeleteModalComponent],
})

export class DeleteModalModule {}