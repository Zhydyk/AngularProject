import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from './footer.component';

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {}
