import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { UserLoginComponent } from './pages/user-login/user-login.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    UserLoginComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule
  ],
  providers: []
})
export class AuthModule { }
