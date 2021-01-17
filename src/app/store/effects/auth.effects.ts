import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as fromAuthAction from '../actions/auth.actions';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Login } from 'src/app/models/login.interface';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class AuthEffects {
  public login$: Observable<any> = createEffect(() => {
    return this.action$.pipe(
      ofType(fromAuthAction.login),
      switchMap(({userLogin} : {userLogin: Login}) => {
        console.log(userLogin);
        return this.authenticationService.login(userLogin).pipe(
          map((payload) => {
            this.router.navigate(['courses']);
            return fromAuthAction.loadLoginSuccess({payload});
          }),
          catchError((err) => of(fromAuthAction.loadLoginFailure(err)))
        );
      }),
    );
  });

  // public logout$: Observable<any> = createEffect(() => {
  //   return this.action$.pipe(
  //     ofType(fromAction.logOut),
  //     tap(() => {
  //       this.authenticationService.logout();
  //       this.router.navigate(['login']);
  //       return fromAction.logOut;
  //     }),
  //     catchError((err) => of(fromAction.loadLoginFailure(err))),
  //   )
  // });

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private action$: Actions
  ) {}
}
