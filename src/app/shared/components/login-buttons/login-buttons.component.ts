import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { UserInfo } from 'src/app/models/user-info.interface';
import * as fromAuthAction from 'src/app/store/actions/auth.actions';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { selectUserInfo } from 'src/app/store/selectors/auth.selectors';

@Component({
  selector: 'login-buttons',
  templateUrl: './login-buttons.component.html',
  styleUrls: ['./login-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginButtonsComponent implements OnInit, OnDestroy {
  public userInfo: string;
  public subscription = new Subscription();

  constructor(private router: Router, private store: Store) {}

  public ngOnInit(): void {
    this.subscription = this.store
      .pipe(select(selectUserInfo))
      .subscribe((userInfo: UserInfo) => {
        if (userInfo) {
          this.userInfo = `${userInfo.name?.first} ${userInfo.name?.last}`;
        }
      });
  }

  public onLogout() {
    this.store.dispatch(fromAuthAction.logOut());
    this.router.navigate(['login']);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
