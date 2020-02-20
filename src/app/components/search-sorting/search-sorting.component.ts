import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-sorting',
  templateUrl: './search-sorting.component.html',
  styleUrls: ['./search-sorting.component.scss']
})
export class SearchSortingComponent implements OnInit {

  @Input() public isShow: boolean;
  public order: [string, string, boolean];
  public reverse: boolean = true;

  @Output() public dateSorting: EventEmitter<[string, string, boolean]> = new EventEmitter();
  @Output() public viewsSorting: EventEmitter<[string, string, boolean]> = new EventEmitter();

  constructor() { }

  public sortDate(): void {
    this.reverse = !this.reverse;
    this.order = ['snippet', 'publishedAt', this.reverse];
    this.dateSorting.emit(this.order);
  }
  public sortViews(): void {
    this.reverse = !this.reverse;
    this.order = ['statistics', 'viewCount', this.reverse];
    this.viewsSorting.emit(this.order);
  }

  public ngOnInit(): void {
  }
}
