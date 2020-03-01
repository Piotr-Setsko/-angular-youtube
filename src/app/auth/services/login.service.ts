import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public logined: BehaviorSubject<boolean | null> = new BehaviorSubject(null);
  public currentLoginState: Observable<boolean | null> = this.logined.asObservable();

  constructor() { }

  public auth(username: string, password: string): boolean {
    if (username !== '' && password !== '') {
      localStorage.setItem('user', 'loggedin');
      this.logined.next(true);
      return true;
    }
  }

  public logout(): void {
    this.logined.next(false);
    localStorage.removeItem('user');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('user') !== null);
  }
}
