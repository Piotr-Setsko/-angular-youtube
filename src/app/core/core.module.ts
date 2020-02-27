import { NgModule } from '@angular/core';
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
})
export class CoreModule { }
