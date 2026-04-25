import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Dynamic routes - rendered on demand by the server
  {
	path: 'shop/:id',
	renderMode: RenderMode.Server  
  },
  {
	path: 'team/:id',
	renderMode: RenderMode.Server
  },
  {	
	  path: 'blog/:id',
	  renderMode: RenderMode.Server
  },
  // All static routes - prerendered at build time
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
