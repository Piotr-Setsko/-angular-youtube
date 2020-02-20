import { Component, OnInit, Input } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';
import { SortingDataPipe } from '../../pipes/sorting-data.pipe';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})

export class SearchResultsComponent implements OnInit {

  @Input() public items: SearchItem[];
  public order: string = 'statistics.likeCount';

    public ngOnInit(): void {
  }

  public sortDate(): void {
    this.order = 'statistics.viewCount';
    console.log(this.order);
  }
}
