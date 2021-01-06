import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginButtonsComponent } from './login-buttons.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LoginButtonsComponent],
  exports: [LoginButtonsComponent],
})
export class LoginButtonsModule {}
