import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public logined: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  public auth(username: string, password: string, show: boolean): boolean {
      localStorage.setItem('user', 'loggedin');
      this.logined.emit(show);
      return true;
  }

  public logout(): void {
    localStorage.removeItem('user');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('user') !== null);
  }
}
