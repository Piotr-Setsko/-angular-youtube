import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent }  from './components/search-results/search-results.component';
import { SearchSortingComponent } from './components/search-sorting/search-sorting.component';

import { BorderColorDirective } from './directives/border-color.directive';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchResultsComponent,
    SearchSortingComponent,
    BorderColorDirective
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class YoutubeModule { }
