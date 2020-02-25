import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  private arr: [string, string, boolean];

  public dateSorting: EventEmitter<[string, string, boolean]> = new EventEmitter();

  public onClickedDate(event: [string, string, boolean]): void {
    this.arr = event;
    this.dateSorting.emit(this.arr);
  }

  constructor() { }
}
