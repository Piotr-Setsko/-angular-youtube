import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { response } from '../../response';
import { SearchItem } from '../../models/search-item.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  public isShow: boolean = false;
  public items: SearchItem[] = response.items;

  @Output() public clickChange: EventEmitter<boolean> = new EventEmitter();
  @Output() public clickSubmit: EventEmitter<SearchItem[]> = new EventEmitter();

  public search: string;

  constructor() { }

  public ngOnInit(): void {
  }

  public toggleDisplay(): void {
    this.isShow = !this.isShow;
    this.clickChange.emit(this.isShow);
  }

  public add(myform: NgForm): void {
    if (myform.value.search !== undefined) {
      this.clickSubmit.emit(this.items);
    }
    console.log(myform);
  }
}
