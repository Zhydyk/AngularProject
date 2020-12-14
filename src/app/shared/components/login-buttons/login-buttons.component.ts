import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'login-buttons',
  templateUrl: './login-buttons.component.html',
  styleUrls: ['./login-buttons.component.scss'], 
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginButtonsComponent {}
