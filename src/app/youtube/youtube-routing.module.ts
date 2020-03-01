import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainGuard } from '../core/guards/main.guard';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { DetailedInformationComponent } from './pages/detailed-information/detailed-information.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  { path: 'item/:id', component: DetailedInformationComponent, canActivate: [MainGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule { }
