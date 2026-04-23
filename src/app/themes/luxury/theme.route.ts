import { Routes } from "@angular/router";


export const JEWELRY_LUXURY_THEME_ROUTE: Routes = [
    {
        path: '',
        loadComponent: () => import('../../pages/main-build/semantic-home/semantic-home.page')
			.then(m => m.SemanticHome), 
        children: [
            {
                path: '',
                loadChildren: () => import('../../pages/home/HOME_ROUTES').then(
                    (m) => m.HOME_ROUTES,
                ),
            }
        ],   
    },
];
