import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductInsertComponent } from './product-insert/product-insert.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './products.service';

const routes: Routes = [
  { path: 'list', component: ProductListComponent },
  { path: 'insert', component: ProductInsertComponent },
];

@NgModule({
  declarations: [ProductInsertComponent, ProductListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers:[ProductsService]
})
export class ProductsModule {}
