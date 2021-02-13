import { Routes, RouterModule } from '@angular/router';
import { AddCartComponent } from './add-cart.component';

const routes: Routes = [{ path: '', component: AddCartComponent }];

export const AddCartRoutes = RouterModule.forChild(routes);
