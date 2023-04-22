import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product,ProductsAPIList } from './products.interface';
import { delay } from 'rxjs';

const PRODUCTS_API = 'https://codingfactory.ddns.net/api/product';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  findAll() {
    console.log("findAll products")
    return this.http
      .get<ProductsAPIList>(`${PRODUCTS_API}/findAll`)
      .pipe(delay(500));
  }

  insertProduct(product: Product) {
    console.log('insert products');
    return this.http.post<ProductsAPIList>(`${PRODUCTS_API}/create`, product);
  }
}