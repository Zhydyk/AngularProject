import { Injectable } from '@angular/core';
import { Login } from 'src/app/models/login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private authKey = 'Auth_Key';

  public login(value: Login, key: string = this.authKey): void {
    window.localStorage.setItem(key, JSON.stringify(value));
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
