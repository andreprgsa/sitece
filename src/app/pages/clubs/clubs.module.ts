import { NgModule }      from '@angular/core';
import { NgaModule } from '../../theme/nga.module';
import { CommonModule }  from '@angular/common';
import { ClubsComponent } from './clubs.component';
import { ClubDetailComponent } from './club-detail.component';
import { routing } from './clubs.routing';

@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing
  ],
  declarations: [
    ClubsComponent,
    ClubDetailComponent
  ]
})
export class ClubsModule {}