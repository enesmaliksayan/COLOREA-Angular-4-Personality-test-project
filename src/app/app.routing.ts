import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { TestComponent } from './test/test.component';

const appRoutes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'result',
        component:ResultComponent
    },
    {
        path:'test',
        component:TestComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
