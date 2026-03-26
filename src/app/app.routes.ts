/* ==========================================================================
   ROOT COMPONENT ROUTES
   ========================================================================== */

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/landing/landing.component').then((m) => m.LandingComponent),

    data: {
      title: 'Mersol Sureste | Soluciones en Soldadura y Abrasivos',
      description: 'Líderes en equipos y consumibles industriales en el sureste mexicano.',
      ogImage: 'assets/brand/og-main.jpg',
    },
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
