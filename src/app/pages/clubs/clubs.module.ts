import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ClubsComponent } from './clubs.component';
import { routing } from './clubs.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    ClubsComponent
  ]
})
export class ClubsModule {}