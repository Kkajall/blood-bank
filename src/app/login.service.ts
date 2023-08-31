import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLogin = new Subject<boolean>();

  constructor() { }

  login() {
    this.isLogin.next(true);
  }

  logout() {
    this.isLogin.next(false);
  }

  isLoggedIn() {
    return this.isLogin;
  }
}
