import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { HeaderComponent} from './components/header/header.component';
import { DataService } from './services/data.service';
import { LoginService } from '../auth/services/login.service';
import { Page404Component } from './pages/page404/page404.component';

import { HttpClientModule } from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    HeaderComponent,
    Page404Component
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    DataService,
    LoginService
  ],
})
export class CoreModule { }
