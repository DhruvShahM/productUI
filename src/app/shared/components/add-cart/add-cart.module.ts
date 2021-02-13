import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCartComponent } from './add-cart.component';
import { AddCartRoutes } from './add-cart.routing';
import { LoaderModule } from '../../loader/loader.module';

@NgModule({
  imports: [CommonModule, AddCartRoutes, LoaderModule],
  declarations: [AddCartComponent],
})
export class AddCartModule {}
