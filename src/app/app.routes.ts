import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'assignments',
    loadComponent: () =>
      import('./pages/assignments/assignments.page').then((m) => m.AssignmentsPage),
  },
  {
    path: 'assignments/:id',
    loadComponent: () =>
      import('./pages/assignment-detail/assignment-detail.page').then((m) => m.AssignmentDetailPage),
  },
  {
    path: 'stats',
    loadComponent: () =>
      import('./pages/stats/stats.page').then((m) => m.StatsPage),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./pages/settings/settings.page').then((m) => m.SettingsPage),
  },
];