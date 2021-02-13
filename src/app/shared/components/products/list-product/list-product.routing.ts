import { Routes, RouterModule } from '@angular/router';
import { ListProductComponent } from './list-product.component';

const routes: Routes = [{ path: '', component: ListProductComponent }];

export const ListProductRoutes = RouterModule.forChild(routes);
