/**
 * Project: Angular 21 Demo Playground
 * Description: Angular 21 Demo Playground for fun demo
 * Author: Sangwin Gawande
 * GitHub: https://github.com/sangwin
 * Date: 2025-11-22
 */

import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
/**
 * Project: Angular 21 Demo Playground
 * Description: Angular 21 Demo Playground for fun demo
 * Author: Sangwin Gawande
 * GitHub: https://github.com/sangwin
 * Date: 2025-11-22
 */