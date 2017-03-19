import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from '../providers/auth/auth-guard.service';

// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: '',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'pages',
    component: Pages,
    /*children: [
      { path: 'home', loadChildren: 'app/pages/home/home.module#HomeModule'},
      { path: 'events', loadChildren: 'app/pages/events/events.module#EventsModule', canActivate: [AuthGuard] },
      { path: 'profile', loadChildren: 'app/pages/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },      
      { path: 'clubs', loadChildren: 'app/pages/clubs/clubs.module#ClubsModule', canActivate: [AuthGuard] },
      { path: 'advantages', loadChildren: 'app/pages/advantages/advantages.module#AdvantagesModule', canActivate: [AuthGuard] },
      { path: 'about', loadChildren: 'app/pages/about/about.module#AboutModule', canActivate: [AuthGuard] },
      { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard] },
      { path: 'components', loadChildren: 'app/pages/components/components.module#ComponentsModule', canActivate: [AuthGuard] },
      { path: 'charts', loadChildren: 'app/pages/charts/charts.module#ChartsModule', canActivate: [AuthGuard] },
      { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule', canActivate: [AuthGuard] },
      { path: 'forms', loadChildren: 'app/pages/forms/forms.module#FormsModule', canActivate: [AuthGuard] },
      { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule', canActivate: [AuthGuard] },
      { path: 'maps', loadChildren: 'app/pages/maps/maps.module#MapsModule', canActivate: [AuthGuard] }
] */
    children: [
      { path: 'home', loadChildren: 'app/pages/home/home.module#HomeModule'},
      { path: 'events', loadChildren: 'app/pages/events/events.module#EventsModule'},
      { path: 'profile', loadChildren: 'app/pages/profile/profile.module#ProfileModule'},      
      { path: 'clubs', loadChildren: 'app/pages/clubs/clubs.module#ClubsModule'},
      { path: 'advantages', loadChildren: 'app/pages/advantages/advantages.module#AdvantagesModule'},
      { path: 'about', loadChildren: 'app/pages/about/about.module#AboutModule'},
      { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule'},
      { path: 'components', loadChildren: 'app/pages/components/components.module#ComponentsModule'},
      { path: 'charts', loadChildren: 'app/pages/charts/charts.module#ChartsModule'},
      { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule'},
      { path: 'forms', loadChildren: 'app/pages/forms/forms.module#FormsModule'},
      { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule'},
      { path: 'maps', loadChildren: 'app/pages/maps/maps.module#MapsModule'}
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
