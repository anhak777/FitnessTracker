import { SharedModule } from './../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    ReactiveFormsModule,
    AngularFireAuthModule,
    SharedModule,
    AuthRoutingModule
  ],
})
export class AuthModule {

}
