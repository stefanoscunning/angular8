import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeviceDetectorModule } from 'ngx-device-detector';
import * as $ from 'jquery';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './shared/auth/auth-guard.service';
import { AuthService } from './shared/auth/auth.service';
import { TokenStorage } from './shared/auth/token-storage.service';
import { SharedModule } from "./shared/shared.module";
import { LayoutComponent } from './layouts/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    DeviceDetectorModule.forRoot(),
    HttpClientModule,
    HttpClientJsonpModule,
    SharedModule,
    AppRoutingModule,
    
  ],
  providers: [AuthService,
    AuthGuard, TokenStorage
     
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
