import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/landing-demo.component/landing-demo.component').then(
        (m) => m.LandingDemoComponent,
      ),

    data: {
      title: 'Mersol | Soluciones Industriales y Distribuidor Austromex',
      description:
        'Expertos en equipos de soldadura y consumibles industriales. La solución integral para tu empresa.',
      ogImage: 'assets/landing/landing-demo/og-main.jpg',
    },
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
