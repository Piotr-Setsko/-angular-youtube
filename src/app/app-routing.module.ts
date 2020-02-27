import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainGuard } from './core/guards/main.guard';

import { MainPageComponent } from './youtube/pages/main-page/main-page.component';
import { LoginComponent } from './auth/pages/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'main', component: MainPageComponent, canActivate: [MainGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
