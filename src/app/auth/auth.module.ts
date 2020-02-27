import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { UserLoginComponent} from './components/user-login/user-login.component';
import { LoginService } from './services/login.service';
import { LoginComponent } from './pages/login-page/login/login.component';

@NgModule({
  declarations: [
    UserLoginComponent,
    LoginComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [
    LoginService
  ]
})
export class AuthModule { }
