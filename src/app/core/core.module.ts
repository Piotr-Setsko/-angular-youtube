import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
=======
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { HeaderComponent} from './components/header/header.component';
import { DataService } from './services/data.service';

@NgModule({
  imports: [
    RouterModule,
    SharedModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    DataService
  ],
>>>>>>> 10309e15052a3201aaac160008f7cd34ba139b56
})
export class CoreModule { }
