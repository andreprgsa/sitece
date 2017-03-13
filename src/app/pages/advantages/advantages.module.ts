import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AdvantagesComponent } from './advantages.component';
import { routing } from './advantages.routing';
import { NgaModule } from '../../theme/nga.module';


@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing
  ],
  declarations: [
    AdvantagesComponent
  ]
})
export class AdvantagesModule {}