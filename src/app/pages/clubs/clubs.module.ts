import { NgModule }      from '@angular/core';
import { NgaModule } from '../../theme/nga.module';
import { CommonModule }  from '@angular/common';
import { ClubsComponent } from './clubs.component';
import { routing } from './clubs.routing';

@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing
  ],
  declarations: [
    ClubsComponent
  ]
})
export class ClubsModule {}