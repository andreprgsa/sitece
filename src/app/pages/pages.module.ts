import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AuthGuard } from '../providers/auth/auth-guard.service';
import { AuthService } from '../providers/auth/auth.service';


import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';

import { Pages } from './pages.component';

@NgModule({
  imports: [CommonModule, NgaModule, routing],
  providers: [AuthGuard, AuthService],
  declarations: [Pages]
})
export class PagesModule {
}
