import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  public isShow: boolean = false;
  @Output() public clickChange: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  public ngOnInit(): void {
  }

  public toggleDisplay(): void {
    this.isShow = !this.isShow;
    this.clickChange.emit(this.isShow);
  }
}
