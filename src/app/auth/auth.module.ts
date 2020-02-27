import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { UserLoginComponent} from './components/user-login/user-login.component';

@NgModule({
  declarations: [
    UserLoginComponent
  ],
  imports: [
    SharedModule
  ]
})
export class AuthModule { }
