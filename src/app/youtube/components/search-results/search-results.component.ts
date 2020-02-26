import { Component, OnInit, Input } from '@angular/core';
import { SearchItem } from '../../../models/search-item.model';

import { DataService } from '../../../core/services/data.service';
import { response } from 'src/app/response';

import { SortService } from '../../services/sort.service';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})

export class SearchResultsComponent implements OnInit {

  public items: SearchItem[] = [];
  public sort: [string, string, boolean] = ['', '', false];

  @Input() public wordSort: string;

  constructor(private dataService: DataService, private sortService: SortService){
    this.dataService.clickSubmit.subscribe(items => this.items = items);
    this.sortService.dateSorting.subscribe(sort => this.sort = sort);
  }

    public ngOnInit(): void {
  }

}
