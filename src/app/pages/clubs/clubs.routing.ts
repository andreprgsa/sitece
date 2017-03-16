import { Routes, RouterModule }  from '@angular/router';

import { Clubs } from './clubs.component';
//import { [nomDuClub] } from './components/[nomDuClub]/[nomDuClub].component';
import { OverviewClubs } from './components/overviewClubs/overviewClubs.component';
import { SoccerClubs } from './components/soccerClubs/soccerClubs.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: OverviewClubs,
    children: [
      //{ path: 'nomDuClub', component: [nomDuClub] },
      { path: 'soccerClubs', component: SoccerClubs },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
