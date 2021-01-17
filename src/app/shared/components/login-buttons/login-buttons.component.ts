import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserInfo } from 'src/app/models/user-info.interface';
import { AuthenticationService } from '../../services/authentication.service';
import * as fromAuthAction from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'login-buttons',
  templateUrl: './login-buttons.component.html',
  styleUrls: ['./login-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginButtonsComponent {
  public userInfo: UserInfo = this.authenticationService.getUserInfo();

  constructor(
    private authenticationService: AuthenticationService,
    private store: Store
  ) {}

  public onLogout() {
    this.store.dispatch(fromAuthAction.logOut());
  }
}
