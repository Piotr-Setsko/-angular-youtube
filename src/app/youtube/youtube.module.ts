import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchSortingComponent } from './components/search-sorting/search-sorting.component';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { YoutubeRoutingModule } from './youtube-routing.module';

import { BorderColorDirective } from './directives/border-color.directive';
import { SortingDataPipe } from './pipes/sorting-data.pipe';
import { SortingInputPipe } from './pipes/sorting-input.pipe';
import { SortService } from './services/sort.service';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    SearchSortingComponent,
    MainPageComponent,
    BorderColorDirective,
    SortingDataPipe,
    SortingInputPipe
  ],
  imports: [
    SharedModule,
    YoutubeRoutingModule
  ],
  providers: [
    SortService
  ],
})
export class YoutubeModule { }
