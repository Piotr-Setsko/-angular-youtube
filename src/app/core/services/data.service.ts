import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private show: boolean = false;
  clickChange: EventEmitter<boolean> = new EventEmitter();

  public onClicked(show: boolean): void {
    this.show = show;
    this.clickChange.emit(this.show);
  }

  constructor() { }
}
