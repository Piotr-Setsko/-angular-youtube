import { Injectable, EventEmitter } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private show: boolean = false;
  private itemsResp: SearchItem[];

  public clickChange: EventEmitter<boolean> = new EventEmitter();
  public clickSubmit: EventEmitter<SearchItem[]> = new EventEmitter();

  constructor() { }

  public onClicked(): void {
    this.show = !this.show;
    this.clickChange.emit(this.show);
  }

  public onClickedResp(event: SearchItem[]): void {
    this.itemsResp = event;
    this.clickSubmit.emit(this.itemsResp);
  }
}
