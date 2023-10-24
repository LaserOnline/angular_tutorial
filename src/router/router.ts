import { Routes } from "@angular/router";
import { AppComponent } from "src/app/app.component";


export const routers: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'menu'
    },
    {
        path: 'menu',
        loadComponent: () => import("../app/components/menu/menu.component").then((m) => m.MenuComponent)
    },
    {
        path: 'view-input',
        loadComponent: () => import("../app/components/view-input/view-input.component").then((m) => m.ViewInputComponent)
    },
    {
        path: 'view-button',
        loadComponent: () => import("../app/components/view-button/view-button.component").then((m) => m.ViewButtonComponent)
    },
    {
        path: '**',
        loadComponent: () => import("../app/components/oops/oops.component").then((m) => m.OopsComponent)
    }
];