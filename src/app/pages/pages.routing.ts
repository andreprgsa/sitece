import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from '../providers/auth/auth-guard.service';

// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule'
  },
  {
    path: 'login/:origin/:content',
    loadChildren: 'app/login/login.module#LoginModule'
  },
  {
    path: 'verify-account/:token',
    loadChildren: 'app/verifyAccount/verifyAccount.module#VerifyAccountModule'
  },
  {
    path: '',
    loadChildren: 'app/login/login.module#LoginModule'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: 'home', loadChildren: 'app/pages/home/home.module#HomeModule', canActivate: [AuthGuard] },
      { path: 'events', loadChildren: 'app/pages/events/events.module#EventsModule', canActivate: [AuthGuard] },
      { path: 'profile', loadChildren: 'app/pages/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },      
      { path: 'clubs', loadChildren: 'app/pages/clubs/clubs.module#ClubsModule', canActivate: [AuthGuard] },
      { path: 'advantages', loadChildren: 'app/pages/advantages/advantages.module#AdvantagesModule', canActivate: [AuthGuard] },
      { path: 'about', loadChildren: 'app/pages/about/about.module#AboutModule', canActivate: [AuthGuard] },
      { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule'},
      { path: 'components', loadChildren: 'app/pages/components/components.module#ComponentsModule', canActivate: [AuthGuard] },
      { path: 'charts', loadChildren: 'app/pages/charts/charts.module#ChartsModule', canActivate: [AuthGuard] },
      { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule', canActivate: [AuthGuard] },
      { path: 'forms', loadChildren: 'app/pages/forms/forms.module#FormsModule', canActivate: [AuthGuard] },
      { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule', canActivate: [AuthGuard] },
      { path: 'maps', loadChildren: 'app/pages/maps/maps.module#MapsModule', canActivate: [AuthGuard] }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
