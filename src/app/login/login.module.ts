import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import {Md5} from 'ts-md5/dist/md5';
//import { AuthenticationService } from '../shared/authentication/authentication.service';
//import { TokenStorage } from '../shared/authentication/token-storage.service';
import {AuthService} from '../shared/auth/auth.service';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent],
  providers:[
    AuthService
  ]
})
export class LoginModule { }
