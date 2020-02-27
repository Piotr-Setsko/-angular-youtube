import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainGuard } from './core/guards/main.guard';

import { MainPageComponent } from './youtube/pages/main-page/main-page.component';
import { UserLoginComponent } from './auth/components/user-login/user-login.component';

const routes: Routes = [
  { path: '', component: UserLoginComponent},
  { path: 'login', component: UserLoginComponent},
  { path: 'home', component: MainPageComponent, canActivate: [MainGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
