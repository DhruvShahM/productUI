import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/_models/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
})
export class ListProductComponent implements OnInit {
  productData: Product[] = [];
  isLoading: boolean = false;
  private subscriptions = new Subscription();
  constructor(private _productService: ProductService) {}

  ngOnInit() {
    this.getProductData('');
  }
  getProductData(searchKeyword) {
    this.isLoading = true;
    this.subscriptions.add(
      this._productService.getProductAll(searchKeyword).subscribe(
        (res: Product[]) => {
          this.isLoading = false;
          this.productData = res;
        },
        (err) => {
          this.isLoading = false;
          throw err;
        }
      )
    );
  }

  addedToCart(id, item) {
    this.isLoading = true;
    item.isProductAdded = true;

    this.subscriptions.add(
      this._productService.updateProduct(id, item).subscribe(
        (res: Product) => {
          this.isLoading = false;
          let itemIndex = this.productData.findIndex(
            (product) => product.id == item.id
          );
          this.productData[itemIndex] = res;
        },
        (err) => {
          this.isLoading = false;
          throw err;
        }
      )
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
