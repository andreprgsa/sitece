import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../theme/nga.module';
import { VerifyAccount } from './verifyAccount.component';
import { routing }       from './verifyAccount.routing';

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
    VerifyAccount
  ],
  providers:    [
      AUTH_PROVIDERS
  ]  
})
export class VerifyAccountModule {}
