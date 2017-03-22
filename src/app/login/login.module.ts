import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../theme/nga.module';
import { Login } from './login.component';
import { routing }       from './login.routing';

import { AUTH_PROVIDERS }      from 'angular2-jwt';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Login
  ],
  providers:    [
      AUTH_PROVIDERS
  ]  
})
export class LoginModule {}
