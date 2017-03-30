import { Routes, RouterModule }  from '@angular/router';

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

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Clubs,
    children: [
      //{ path: 'nomDuClub', component: [nomDuClub] },
      { path: 'overviewClubs', component: OverviewClubs },
      { path: 'soccerClubs', component: SoccerClubs },
      { path: 'basketClubs', component: BasketClubs },
      { path: 'handClubs', component: HandClubs },
      { path: 'runningClubs', component: RunningClubs },
      { path: 'badmintonClubs', component: BadmintonClubs },
      { path: 'grimpClubs', component: GrimpClubs },
      { path: 'tennisClubs', component: TennisClubs },
      { path: 'musicClubs', component: MusicClubs }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
