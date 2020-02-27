import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public logined: EventEmitter<boolean> = new EventEmitter();

  auth(username: string, password: string, show: boolean) {
      localStorage.setItem('user', "loggedin");
      this.logined.emit(show);
      return true;
  }

  logout() {
    localStorage.removeItem('user');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('user') !== null);
  }

  constructor() { }
}
