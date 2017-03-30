import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './clubs.routing';
import { Clubs } from './clubs.component';
//import { [nomDuClub] } from './components/[nomDuClub]/[nomDuClub].component';
import { OverviewClubs } from './components/overviewClubs/overviewClubs.component';
import { SoccerClubs } from './components/soccerClubs/soccerClubs.component';
import { BasketClubs } from './components/basketClubs/basketClubs.component';
import { HandClubs } from './components/handClubs/handClubs.component';
import { RunningClubs } from './components/runningClubs/runningClubs.component';
import { BadmintonClubs } from './components/badmintonClubs/badmintonClubs.component';
import { GrimpClubs } from './components/grimpClubs/grimpClubs.component';
import { TennisClubs } from './components/tennisClubs/tennisClubs.component';
import { MusicClubs } from './components/musicClubs/musicClubs.component';

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
    BasketClubs,
    HandClubs,
    RunningClubs,
    BadmintonClubs,
    GrimpClubs,
    TennisClubs,
    MusicClubs
  ]
})
export class ClubsModule {}
