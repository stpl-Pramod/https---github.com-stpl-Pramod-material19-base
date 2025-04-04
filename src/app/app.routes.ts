import { Routes } from '@angular/router';
import { PublicComponent } from './layout/public/public.component';
import { SecureComponent } from './layout/secure/secure.component';

export const routes: Routes = [
    {
        path: '',
        component: PublicComponent,
        children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'home', loadComponent: () => import('./components/public/home/home.component').then(m => m.HomeComponent) },
        //   { path: 'login', loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent) },
        ],
      },
      {
        path: '',
        component: SecureComponent,
        children: [
       
          { path: 'dashboard', loadComponent: () => import('./components/secure/dashboard/dashboard.component').then(m => m.DashboardComponent) },
          { path: 'profile', loadComponent: () => import('./components/secure/profile/profile.component').then(m => m.ProfileComponent) },
        //   { path: 'login', loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent) },
        ],
      },
];

