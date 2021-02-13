import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product.component';
import { AddProductRoutes } from './add-product.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderModule } from 'src/app/shared/loader/loader.module';

@NgModule({
  imports: [CommonModule, AddProductRoutes, ReactiveFormsModule, LoaderModule],
  declarations: [AddProductComponent],
})
export class AddProductModule {}
