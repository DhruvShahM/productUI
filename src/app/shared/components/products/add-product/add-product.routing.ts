import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product.component';

const routes: Routes = [{ path: '', component: AddProductComponent }];

export const AddProductRoutes = RouterModule.forChild(routes);
