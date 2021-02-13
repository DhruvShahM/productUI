import { RouterModule, Routes } from '@angular/router';
import { SharedComponent } from './shared.component';

const routes: Routes = [
  {
    path: '',
    component: SharedComponent,
    children: [
      {
        path: 'list-product',
        loadChildren:
          './components/products/list-product/list-product.module#ListProductModule',
      },
      {
        path: 'add-product',
        loadChildren:
          './components/products/add-product/add-product.module#AddProductModule',
      },
      {
        path: 'cart',
        loadChildren: './components/add-cart/add-cart.module#AddCartModule',
      },
    ],
  },
];

export const SharedRoutes = RouterModule.forChild(routes);
