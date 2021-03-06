import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LoginButtonsComponent } from './login-buttons.component';

@NgModule({
  imports: [CommonModule, RouterModule, TranslateModule],
  declarations: [LoginButtonsComponent],
  exports: [LoginButtonsComponent],
})
export class LoginButtonsModule {}
