import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  constructor(private dataService: DataService) {
    this.dataService.clickSubmit.subscribe(items => this.items = items);
  }

  public toggleDisplay(): void {
      this.dataService.onClicked();
  }

  public add(myform: NgForm): void {
    if (myform.value.search !== undefined) {
      this.dataService.onClickedResp(this.items);
    }
  }

  public ngOnInit(): void {}
}
