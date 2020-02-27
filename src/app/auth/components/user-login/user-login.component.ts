import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  public login: string = '';
  public password: string = '';

  constructor(private loginService: LoginService, private router: Router) {
    if (this.loginService.loggedIn) {
      this.router.navigate(['']);
    }
   }

  public auth(): void {
    console.log(this.login, this.password)
    if (this.login !== null && this.password !== null) {
      if (this.loginService.login(this.login, this.password)) {
        this.router.navigate(["home"]);
      }
      else
        alert("Wrong username or password");
    }
  }


  public ngOnInit(): void {
  }

}
