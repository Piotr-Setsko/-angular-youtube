import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../../core/services/data.service';
import { SortService } from '../../services/sort.service';

@Component({
  selector: 'app-search-sorting',
  templateUrl: './search-sorting.component.html',
  styleUrls: ['./search-sorting.component.scss']
})
export class SearchSortingComponent implements OnInit {

  public isShow: boolean;

  public reverse: boolean;
  public order: [string, string, boolean];
  public wordInput: string = '';

  //@Output() public dateSorting: EventEmitter<[string, string, boolean]> = new EventEmitter();
  @Output() public viewsSorting: EventEmitter<[string, string, boolean]> = new EventEmitter();
  @Output() public wordSorting: EventEmitter<string> = new EventEmitter();

  constructor(private dataService: DataService, private sortService: SortService){
    this.dataService.clickChange.subscribe(isShow => this.isShow = isShow);
    this.sortService.dateSorting.subscribe(order => this.order = order);
  }

  public ngOnInit(): void {
  }

  public sortDate(): void {
    this.reverse = !this.reverse;
    this.order = ['snippet', 'publishedAt', this.reverse];
    this.sortService.onClickedDate(this.order);
  }

  public sortViews(): void {
    this.reverse = !this.reverse;
    this.order = ['statistics', 'viewCount', this.reverse];
    this.viewsSorting.emit(this.order);
  }

  public wordSort(event: string): void {
    this.wordInput = event;
    this.wordSorting.emit(this.wordInput);
  }
}
