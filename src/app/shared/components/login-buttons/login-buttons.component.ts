import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/models/user-info.interface';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'login-buttons',
  templateUrl: './login-buttons.component.html',
  styleUrls: ['./login-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginButtonsComponent {
  public userInfo: UserInfo = this.authenticationService.getUserInfo();

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  public onLogout() {
    this.authenticationService.logout();
    this.router.navigate(['login']);
  }
}
