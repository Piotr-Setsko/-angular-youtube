import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainGuard } from './core/guards/main.guard';
import { Page404Component } from './core/pages/page404/page404.component';
import { DetailedInformationComponent } from './youtube/pages/detailed-information/detailed-information.component';

const itemRoutes: Routes = [
  { path: 'details', component: DetailedInformationComponent}
];

const routes: Routes = [
  { path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'main',
    loadChildren: () => import('./youtube/youtube.module')
      .then(m => m.YoutubeModule), canActivate: [MainGuard] },
  { path: ':id', component: DetailedInformationComponent, children: itemRoutes},
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
