import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from '../_models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  apiServer: string;
  constructor(private httpClient: HttpClient) {
    this.apiServer = environment.apiUrl;
  }

  createProduct(product): Observable<Product> {
    return this.httpClient.post<Product>(
      this.apiServer + '/products/',
      JSON.stringify(product),
      this.httpOptions
    );
  }
  getProductById(id): Observable<Product> {
    return this.httpClient.get<Product>(this.apiServer + '/products/' + id);
  }

  getProductAll(keyword): Observable<Product[]> {
    return this.httpClient.get<Product[]>(
      this.apiServer + '/products/?name_like=' + keyword
    );
  }

  updateProduct(id, product): Observable<Product> {
    return this.httpClient.put<Product>(
      this.apiServer + '/products/' + id,
      JSON.stringify(product),
      this.httpOptions
    );
  }
}
