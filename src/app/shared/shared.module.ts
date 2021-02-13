import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddCartModule } from './components/add-cart/add-cart.module';
import { AddProductModule } from './components/products/add-product/add-product.module';
import { ListProductModule } from './components/products/list-product/list-product.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SharedComponent } from './shared.component';
import { SharedRoutes } from './shared.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutes,
    ListProductModule,
    AddProductModule,
    AddCartModule,
  ],
  declarations: [SharedComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}
