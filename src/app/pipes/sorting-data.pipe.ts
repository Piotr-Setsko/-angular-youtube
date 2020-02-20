import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'orderBy'
})
export class SortingDataPipe implements PipeTransform {

  public transform(items: SearchItem[], field: string, reverse: boolean = false): SearchItem[] {
    if (!items) { return []; }

    if (field) {
      items.sort((a, b) => a[field] > b[field] ? 1 : -1);
    } else { items.sort((a, b) => a > b ? 1 : -1); }

    if (reverse) { items.reverse(); }

    return items;
  }

}
