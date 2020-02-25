import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { response } from '../../../response';
import { SearchItem } from '../../../models/search-item.model';

import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DataService]
})

export class HeaderComponent implements OnInit {

  public isShow: boolean = false;
  public items: SearchItem[] = response.items;
  public search: string;

/*
  @Output() public clickChange: EventEmitter<boolean> = new EventEmitter();
  @Output() public clickSubmit: EventEmitter<SearchItem[]> = new EventEmitter();
*/


  constructor(private dataService: DataService){
    this.dataService.clickChange.subscribe(isShow => this.isShow = !isShow);
  }

  public toggleDisplay(): void {
      this.dataService.onClicked(this.isShow);
    // this.isShow = !this.isShow;
    // this.clickChange.emit(this.isShow);
  }

  public add(myform: NgForm): void {
    if (myform.value.search !== undefined) {
      // this.clickSubmit.emit(this.items);
    }
  }

  public ngOnInit(): void {}
}
