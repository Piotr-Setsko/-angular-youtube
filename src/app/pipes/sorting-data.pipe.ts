import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'orderBy'
})
export class SortingDataPipe implements PipeTransform {

  public transform(items: SearchItem[], field1: string, field2: string, reverse: boolean = false): SearchItem[] {
    if (!items) { return []; }

    if (field1 && field2) {
      items.sort((a, b) => {
        let x, y;
        if (!isNaN(+a[field1][field2])) {
          x = +a[field1][field2];
          y = +b[field1][field2];
        } else {
          x = new Date(a[field1][field2]);
          y = new Date(b[field1][field2]);
        }
        if (x < y) {
          return -1;
        } else if (x > y) {
          return 1;
        } else {
          return 0;
        }
        })
      }

    if (reverse) { items.reverse(); }

    console.log(items);
    return items;
  }

}
