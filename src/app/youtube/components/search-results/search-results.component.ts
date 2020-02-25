import { Component, OnInit, Input } from '@angular/core';
import { SearchItem } from '../../../models/search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})

export class SearchResultsComponent implements OnInit {

  @Input() public items: SearchItem[];
  @Input() public sort: [string, string, boolean];
  @Input() public wordSort: string;

    public ngOnInit(): void {
  }

}
