import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginButtonsComponent } from './login-buttons.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoginButtonsComponent],
  exports: [LoginButtonsComponent],
})
export class LoginButtonsModule {}
