import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpAuthRequestService } from 'src/app/api/http-auth-request/http-auth-request.service';
import { Login } from 'src/app/models/login.interface';
import { UserInfo } from 'src/app/models/user-info.interface';
import { switchMap, tap } from 'rxjs/operators';
import { Token } from 'src/app/models/token.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private httpAuthService: HttpAuthRequestService) {}
  private authKey = 'Auth_Key';

  public login(value: Login): Observable<UserInfo> {
    return this.httpAuthService.getAuthToken(value).pipe(
      switchMap((token: Token) => {
        return this.httpAuthService.getUserInfo(token)
      }),
      tap((value: UserInfo) => {
        return window.localStorage.setItem(this.authKey, JSON.stringify(value))
      })
    );
  }

  public logout(key: string = this.authKey): void {
    window.localStorage.removeItem(key);
  }

  public isAuthenticated(): Observable<boolean> {
    const auth = this.getUserInfo() !== null;
    return of(auth);
  }

  public getUserInfo(key: string = this.authKey): UserInfo {
    return JSON.parse(window.localStorage.getItem(key));
  }
}
