import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './list-product.component';
import { ListProductRoutes } from './list-product.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoaderModule } from 'src/app/shared/loader/loader.module';

@NgModule({
  imports: [CommonModule, ListProductRoutes, NgbModule, LoaderModule],
  declarations: [ListProductComponent],
})
export class ListProductModule {}
