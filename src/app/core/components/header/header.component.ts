import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../auth/services/login.service';

import { response } from '../../../youtube/response';
import { SearchItem } from '../../../youtube/models/search-item.model';

import { DataService } from '../../services/data.service';
import { Subscription, BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  public items: SearchItem[] = response.items;
  public search: string;
  public show: boolean;
  public userName: string;
  public searchText: FormControl = new FormControl('');
  // public currentSearchState: Observable<string | null>;

  constructor(private dataService: DataService, private router: Router, private loginService: LoginService) {
    this.dataService.clickSubmit.subscribe(items => this.items = items);
  }

  public toggleDisplay(): void {
      this.dataService.onClicked();
  }

  public add(formGroup: NgForm): void {
    if (formGroup.value.search !== undefined) {
      this.dataService.onClickedResp(this.items);
    }
  }

  public logout(): void {
    this.loginService.logout();
    this.router.navigate(['login']);
  }

  public ngOnInit(): void {
    this.loginService.currentLoginState.subscribe((data) => { this.show = data; });
    this.loginService.currentUserName.subscribe((data) => { this.userName = data; });
    if (localStorage.getItem('status') === 'loggedin' ) {
      this.show = true;
      this.userName = 'Hello, ' + localStorage.user;
    }

    this.searchText.valueChanges.pipe(debounceTime(300), filter((val: string) => (val.length > 3)))
      .subscribe(queryField => { this.dataService.searchYoutube(queryField); });
  }
}
