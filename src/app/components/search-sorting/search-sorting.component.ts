import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-sorting',
  templateUrl: './search-sorting.component.html',
  styleUrls: ['./search-sorting.component.scss']
})
export class SearchSortingComponent implements OnInit {

  @Input() public isShow: boolean;

  constructor() { }

  public ngOnInit(): void {
  }
}
