import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'login-buttons',
  templateUrl: './login-buttons.component.html',
  styleUrls: ['./login-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginButtonsComponent {
  constructor(
    private router: Router,
    public authenticationService: AuthenticationService
  ) {}
  public onLogout() {
    this.authenticationService.logout();
    this.router.navigate(['login']);
  }
}
