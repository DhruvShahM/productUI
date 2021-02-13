import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  private subscriptions = new Subscription();
  ngOnInit() {
    this.productForm = this.fb.group({
      name: [''],
      description: [''],
      price: [''],
      quantity: [''],
    });
  }
  isLoading: boolean = false;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    public _productService: ProductService,
    private toastr: ToastrService
  ) {}
  submitForm() {
    this.isLoading = true;
    this.subscriptions.add(
      this._productService.createProduct(this.productForm.value).subscribe(
        (res) => {
          this.isLoading = false;
          this.toastr.success('Add Product', 'Added product successfully!');
          this.router.navigateByUrl('/list-product');
        },
        (err) => {
          this.isLoading = false;
          throw err;
        }
      )
    );
  }
  goToProductList() {
    this.router.navigateByUrl('/list-product');
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
