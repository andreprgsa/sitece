import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AdvantagesComponent } from './advantages.component';
import { routing } from './advantages.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    AdvantagesComponent
  ]
})
export class AdvantagesModule {}