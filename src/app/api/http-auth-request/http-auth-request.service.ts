import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/login.interface';
import { Token } from 'src/app/models/token.interface';
import { UserInfo } from 'src/app/models/user-info.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpAuthRequestService {

  constructor(private httRequest: HttpClient) { }

  public authUrl = 'http://localhost:3004';

  public getAuthToken(userInfo: Login): Observable<Token> {
    return this.httRequest.post<Token>(`${this.authUrl}/auth/login`, userInfo);
  }

  public getUserInfo(token: Token): Observable<UserInfo> {
    return this.httRequest.post<UserInfo>(`${this.authUrl}/auth/userinfo`, token);
  }
}
