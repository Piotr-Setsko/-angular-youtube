import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  private arr: [string, string, boolean];
  private wordInput: string;

  public dateSorting: EventEmitter<[string, string, boolean]> = new EventEmitter();
  public viewsSorting: EventEmitter<[string, string, boolean]> = new EventEmitter();
  public wordSorting: EventEmitter<string> = new EventEmitter();

  constructor() { }

  public onClickedDate(event: [string, string, boolean]): void {
    this.arr = event;
    this.dateSorting.emit(this.arr);
  }

  public onClickedViews(event: [string, string, boolean]): void {
    this.arr = event;
    this.viewsSorting.emit(this.arr);
  }

  public onInputWord(event: string): void {
    this.wordInput = event;
    this.wordSorting.emit(this.wordInput);
  }
}
