import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { UserLoginComponent} from './components/user-login/user-login.component';
import { LoginService } from './services/login.service';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    UserLoginComponent,
    LoginPageComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule
  ],
  providers: [
    LoginService
  ]
})
export class AuthModule { }
