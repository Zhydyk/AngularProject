import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as fromAuthAction from '../actions/auth.actions';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Login } from 'src/app/models/login.interface';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

@Injectable()
export class AuthEffects {
  public login$: Observable<Action> = createEffect(() => {
    return this.action$.pipe(
      ofType(fromAuthAction.login),
      switchMap(({userLogin} : {userLogin: Login}) => {
        return this.authenticationService.login(userLogin).pipe(
          map((userLogin) => {
            this.router.navigate(['courses']);
            return fromAuthAction.loadLoginSuccess({ userLogin });
          }),
          catchError((err) => of(fromAuthAction.loadLoginFailure(err)))
        );
      }),
    );
  });

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private action$: Actions
  ) {}
}
