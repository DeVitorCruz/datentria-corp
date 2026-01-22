import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { THEME_CONFIG } from './core/tokens/theme.token';
import { JEWELRY_LUXURY_THEME_CONFIG } from './themes/luxury/theme.config';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    { 
      provide: THEME_CONFIG, 
      useValue: JEWELRY_LUXURY_THEME_CONFIG 
    },
    provideHttpClient(withInterceptorsFromDi()),
  ]
};
