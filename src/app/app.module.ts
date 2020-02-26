import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
//import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './core/components/header/header.component';
import { UserLoginComponent } from './auth/components/user-login/user-login.component';

import { HttpClientModule } from '@angular/common/http';

import { SortingDataPipe } from './youtube/pipes/sorting-data.pipe';
import { SortingInputPipe } from './youtube/pipes/sorting-input.pipe';
import { MainPageComponent } from './youtube/pages/main-page/main-page.component';

import { DataService } from './core/services/data.service';

import { YoutubeModule } from './youtube/youtube.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserLoginComponent,
    SortingDataPipe,
    SortingInputPipe,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //MatCardModule,

    HttpClientModule,
    //FormsModule,
    YoutubeModule,
    SharedModule
  ],
  providers: [
    SortingDataPipe,
    SortingInputPipe,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
