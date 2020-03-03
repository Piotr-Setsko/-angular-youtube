import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  protected token: string = 'loginToken';
  public user: User = {login: '', password: ''};

  public logined: BehaviorSubject<boolean | null> = new BehaviorSubject(null);
  public currentLoginState: Observable<boolean | null> = this.logined.asObservable();

  public userNamed: BehaviorSubject<string | null> = new BehaviorSubject('Your Name');
  public currentUserName: Observable<string | null> = this.userNamed.asObservable();

  constructor() { }

  public auth(username: string, password: string): boolean {
    if (username !== '' && password !== '') {
      this.user = {login: username, password: password, token: this.token};
      localStorage.setItem('status', 'loggedin');
      localStorage.setItem('user', this.user.login);
      this.userNamed.next('Hello, ' + this.user.login);
      this.logined.next(true);
      return true;
    }
  }

  public logout(): void {
    this.logined.next(false);
    this.userNamed.next('Your Name');
    this.user = {login: '', password: ''};
    localStorage.clear();
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('status') !== null);
  }
}
