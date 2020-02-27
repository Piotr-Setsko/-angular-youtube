import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../auth/services/login.service';

import { response } from '../../../youtube/response';
import { SearchItem } from '../../../youtube/models/search-item.model';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  public items: SearchItem[] = response.items;
  public search: string;
  public show: boolean = false;

  constructor(private dataService: DataService, private router: Router, private loginService: LoginService) {
    this.dataService.clickSubmit.subscribe(items => this.items = items);
    this.loginService.logined.subscribe(show => this.show = show);
  }

  public toggleDisplay(): void {
      this.dataService.onClicked();
  }

  public add(myform: NgForm): void {
    if (myform.value.search !== undefined) {
      this.dataService.onClickedResp(this.items);
    }
  }

  public logout(): void {
    this.loginService.logout();
    this.show = false;
    this.router.navigate(['']);
  }

  public ngOnInit(): void {
    if (localStorage.getItem('user') !== null) {
      this.show = true;
    }
  }
}
