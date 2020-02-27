import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainGuard } from './core/guards/main.guard';

const routes: Routes = [
  { path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  { path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  { path: 'main',
    loadChildren: () => import('./youtube/youtube.module')
      .then(m => m.YoutubeModule), canActivate: [MainGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
