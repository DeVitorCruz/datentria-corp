import { Routes } from "@angular/router";
import { SemanticHome } from "../../pages/main-build/semantic-home/semantic-home.page";

export const JEWELRY_LUXURY_THEME_ROUTE: Routes = [
    {
        path: '',
        component: SemanticHome, 
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