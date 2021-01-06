import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpAuthRequestService } from 'src/app/api/http-auth-request/http-auth-request.service';
import { Login } from 'src/app/models/login.interface';
import { UserInfo } from 'src/app/models/user-info.interface';
import { switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private httpAuthService: HttpAuthRequestService) {}
  private authKey = 'Auth_Key';

  public login(value: Login): Observable<UserInfo> {
    return this.httpAuthService.getAuthToken(value).pipe(
      switchMap(token => this.httpAuthService.getUserInfo(token)),
      tap(value => console.log(window.localStorage.setItem(this.authKey, JSON.stringify(value))))
    );
  }

  public logout(key: string = this.authKey): void {
    window.localStorage.removeItem(key);
  }

  public isAuthenticated(): boolean {
    return this.getUserInfo() !== null;
  }

  public getUserInfo(key: string = this.authKey): Login {
    return JSON.parse(window.localStorage.getItem(key));
  }

}
