import { Component, OnInit } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';

import { DataService } from '../../../core/services/data.service';
import { SortService } from '../../services/sort.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})

export class SearchResultsComponent implements OnInit {

  public items: SearchItem[] = [];
  public sort: [string, string, boolean] = ['', '', false];
  public wordSort: string = '';

  constructor(private dataService: DataService, private sortService: SortService) {
    this.dataService.clickSubmit.subscribe(items => this.items = items);
    this.sortService.dateSorting.subscribe(sort => this.sort = sort);
    this.sortService.viewsSorting.subscribe(sort => this.sort = sort);
    this.sortService.wordSorting.subscribe(wordSort => this.wordSort = wordSort);
  }

    public ngOnInit(): void {
  }
}
