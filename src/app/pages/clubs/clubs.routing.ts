import { Routes, RouterModule }  from '@angular/router';
import { ClubsComponent } from './clubs.component';

const routes: Routes = [
  {
    path: '',
    component: ClubsComponent
  }
];

export const routing = RouterModule.forChild(routes);