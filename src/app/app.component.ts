import { Component } from '@angular/core';

import { response } from './response';
import { SearchItem } from './models/search-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public title: string = 'youtube-client';

  public show: boolean = false;
  public itemsResp: SearchItem[] = response.items;

  constructor() {
  }

  public onClicked(show: boolean): void {
    this.show = show;
    console.log(this.show);
  }

  public onClickedResp(event: SearchItem[]): void {
    this.itemsResp = event;
  }
}
