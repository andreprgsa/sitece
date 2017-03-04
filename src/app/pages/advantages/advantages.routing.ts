import { Routes, RouterModule }  from '@angular/router';
import { AdvantagesComponent } from './advantages.component';

const routes: Routes = [
  {
    path: '',
    component: AdvantagesComponent
  }
];

export const routing = RouterModule.forChild(routes);