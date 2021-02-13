import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/_models/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.scss'],
})
export class AddCartComponent implements OnInit {
  cartData: Product[] = [];
  isLoading: boolean = false;
  searchKeyword = '';
  private subscriptions = new Subscription();
  constructor(private _productService: ProductService) {}

  ngOnInit() {
    this.getProductData('');
  }
  getProductData(keyWord) {
    this.isLoading = true;
    this.subscriptions.add(
      this._productService.getProductAll(keyWord).subscribe(
        (res: Product[]) => {
          this.isLoading = false;
          this.cartData = res.filter((x) => x.isProductAdded === true);
        },
        (err) => {
          this.isLoading = false;
          throw err;
        }
      )
    );
  }
  removedToCart(id, item) {
    this.isLoading = true;
    item.isProductAdded = false;

    this.subscriptions.add(
      this._productService.updateProduct(id, item).subscribe(
        (res: Product) => {
          this.isLoading = false;
          this.cartData = this.cartData.filter(
            (product) => product.id !== item.id
          );
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
