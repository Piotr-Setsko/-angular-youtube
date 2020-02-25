import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';

@Pipe({
  name: 'input',
  pure: false
})
export class SortingInputPipe implements PipeTransform {

  public transform(items: SearchItem[], field: string): SearchItem[] {
    if (!items) { return []; }

    if (field !== undefined) {
      items = items.filter(item => {
        if (item.snippet.title.toLowerCase().includes(field)) {
          return item;
        }
      });
    }
    return items;
  }

}
