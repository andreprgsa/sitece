import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './clubs.routing';
import { Clubs } from './clubs.component';
//import { [nomDuClub] } from './components/[nomDuClub]/[nomDuClub].component';
import { OverviewClubs } from './components/overviewClubs/overviewClubs.component';
import { SoccerClubs } from './components/soccerClubs/soccerClubs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Clubs,
    //[nomDuClub],
    OverviewClubs,
    SoccerClubs,
  ]/*,
  providers: [
    BubbleMapsService,
    LineMapsService
  ]*/
})
export class ClubsModule {}
