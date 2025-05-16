import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    // { path: '', component: HomeComponent },
    // { path: 'cart', component: CartComponent },
    // { path: '**', redirectTo: '' },


    {
        path: '',
        loadComponent: () =>
          import('./home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./cart/cart.component').then((m) => m.CartComponent),
      },



];
