import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product, ProductsAPIList } from '../products.interface';
import { Subscription } from 'rxjs';
import { orderBy } from 'lodash-es';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  loading = true;
  productsList: Product[] = [];
  subscription: Subscription | undefined;

  productSortType: 'asc' | 'desc' = 'asc';
  costSortType: 'asc' | 'desc' = 'asc';
  quantitySortType: 'asc' | 'desc' = 'asc';

  ngOnInit(): void {
    console.log('Starting "findAll" API call for products');
    this.productsService.findAll().subscribe({
      next: (apiData: ProductsAPIList) => {
        const { status, data } = apiData;
        console.log(status, data);
        this.productsList = data;
      },
      error: (error) => {
        this.loading = false;
        console.log(error);
      },
      complete: () => {
        this.loading = false;
        console.log('"findAll" API call for products completed');
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  toggleSort(key: string) {
    switch (key) {
      case 'product':
        this.productSortType = this.productSortType === 'asc' ? 'desc' : 'asc';
        this.productsList = orderBy(
          this.productsList,
          [key],
          [this.productSortType]
        );
        break;
      case 'cost':
        this.costSortType = this.costSortType === 'asc' ? 'desc' : 'asc';
        this.productsList = orderBy(
          this.productsList,
          [key],
          [this.costSortType]
        );
        break;
      case 'quantity':
        this.quantitySortType =
          this.quantitySortType === 'asc' ? 'desc' : 'asc';
        this.productsList = orderBy(
          this.productsList,
          [key],
          [this.quantitySortType]
        );
        break;
      default:
        break;
    }
  }
}
