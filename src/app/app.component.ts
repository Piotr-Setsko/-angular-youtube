import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {


  public arr: [string, string, boolean] = ['', '', false];
  public inputWord: string = '';

  constructor() {
  }
/*
  public onClickedDate(event: [string, string, boolean]): void {
    this.arr = event;
  }
*/
  public onClickedViews(event: [string, string, boolean]): void {
    this.arr = event;
  }

  public onInputWord(event: string): void {
    this.inputWord = event;
  }
}
