import { Routes, RouterModule }  from '@angular/router';
import { EventsComponent } from './events.component';

const routes: Routes = [
  {
    path: '',
    component: EventsComponent
  }
];

export const routing = RouterModule.forChild(routes);