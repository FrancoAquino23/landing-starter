import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
// 1. Cambiamos la importación a 'animations/async'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // 2. Usamos el nuevo provider (esto quita el aviso de deprecado)
    provideAnimationsAsync(),
  ],
};
