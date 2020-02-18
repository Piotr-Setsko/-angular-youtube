import { Component, OnInit } from '@angular/core';

import { response } from '../../response';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})

export class SearchResultsComponent implements OnInit {

  public items = response.items;

  constructor() {
  }

  public ngOnInit(): void {
  }

}
