import { Injectable } from '@angular/core';
import { Login } from 'src/app/models/login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isLogin = false;
  private authKey = 'Auth_Key';

  public login(value: Login, key: string = this.authKey): void {
    window.localStorage.setItem(key, JSON.stringify(value));
    this.isLogin = true;
  }

  public logout(key: string = this.authKey): void {
    window.localStorage.removeItem(key);
    this.isLogin = false;
  }

  public isAuthenticated(): boolean {
    return this.isLogin;
  }

  public getUserInfo(key: string = this.authKey): Login {
    return JSON.parse(window.localStorage.getItem(key));
  }

}
