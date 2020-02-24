import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './core/components/header/header.component';
import { SearchResultsComponent } from './youtube/components/search-results/search-results.component';
import { SearchItemComponent } from './youtube/components/search-item/search-item.component';
import { SearchSortingComponent } from './youtube/components/search-sorting/search-sorting.component';
import { UserLoginComponent } from './auth/components/user-login/user-login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import { SortingDataPipe } from './pipes/sorting-data.pipe';
import { SortingInputPipe } from './pipes/sorting-input.pipe';
import { BorderColorDirective } from './directives/border-color.directive';
import { MainPageComponent } from './youtube/pages/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    SearchSortingComponent,
    UserLoginComponent,
    SortingDataPipe,
    SortingInputPipe,
    BorderColorDirective,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SortingDataPipe,
    SortingInputPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
