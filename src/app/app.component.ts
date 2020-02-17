import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public title: string = 'youtube-client';

  public show: boolean = false;

  public onClicked(show: boolean): void {
    this.show = show;
  }
}
